package com.groupe2.backspringboot.auth.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.groupe2.backspringboot.auth.exception.TokenRefreshException;
import com.groupe2.backspringboot.auth.model.ERole;
import com.groupe2.backspringboot.auth.model.RefreshToken;
import com.groupe2.backspringboot.auth.model.Role;
import com.groupe2.backspringboot.auth.model.UserDao;
import com.groupe2.backspringboot.auth.payload.request.LoginRequest;
import com.groupe2.backspringboot.auth.payload.request.LogoutRequest;
import com.groupe2.backspringboot.auth.payload.request.SignupRequest;
import com.groupe2.backspringboot.auth.payload.request.TokenRefreshRequest;
import com.groupe2.backspringboot.auth.payload.response.JwtResponse;
import com.groupe2.backspringboot.auth.payload.response.MessageResponse;
import com.groupe2.backspringboot.auth.payload.response.TokenRefreshResponse;
import com.groupe2.backspringboot.auth.repository.RoleRepository;
import com.groupe2.backspringboot.auth.repository.UserRepository;
import com.groupe2.backspringboot.auth.security.jwt.JwtTokenUtils;
import com.groupe2.backspringboot.auth.security.services.RefreshTokenService;
import com.groupe2.backspringboot.auth.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private JwtTokenUtils jwtUtils;

	@Autowired
	RefreshTokenService refreshTokenService;

	@Autowired
	PasswordEncoder encoder;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

		String jwt = jwtUtils.generateToken(userDetails);

		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());

		RefreshToken refreshToken = refreshTokenService.createRefreshToken(userDetails.getId());

		return ResponseEntity.ok(new JwtResponse(jwt, refreshToken.getToken(), userDetails.getId(),
				userDetails.getUsername(), userDetails.getEmail(), roles));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signupRequest) {

		if (userRepository.existsByUsername(signupRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken"));
		}

		if (userRepository.existsByEmail(signupRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use"));
		}

		UserDao user = new UserDao(signupRequest.getUsername(), signupRequest.getEmail(),
				encoder.encode(signupRequest.getPassword()));

		Set<String> strRoles = signupRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found"));
			roles.add(userRole);
		} else {

			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found"));
					roles.add(adminRole);
					break;

				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found"));
					roles.add(userRole);
					break;
				}
			});
		}

		user.setRoles(roles);
		// userRepository.save(user);

		// return ResponseEntity.ok(new MessageResponse("User registered succefully"));
		return ResponseEntity.ok(userRepository.save(user));
	}
	
	@PostMapping("/refreshtoken")
	public ResponseEntity<?> refreshtoken(@Valid @RequestBody TokenRefreshRequest request) {
		String requesRefreshToken = request.getRefreshToken();
		
		return refreshTokenService.findByToken(requesRefreshToken)
				.map(refreshTokenService::verifyExpiration)
				.map(RefreshToken::getUser)
				.map(user -> {
					String token = jwtUtils.generateTokenFromUsername(user.getUsername());
					return ResponseEntity.ok(new TokenRefreshResponse(token, requesRefreshToken));
				})
				.orElseThrow(() -> new TokenRefreshException(requesRefreshToken, "Refresh token is not in database"));
	}
	
	@PostMapping("/logout")
	public ResponseEntity<?> logoutUser(@Valid @RequestBody LogoutRequest logoutRequest) {
		refreshTokenService.deleteByUserId(logoutRequest.getUserId());
		return ResponseEntity.ok(new MessageResponse("Logout successful"));
	}


}
