package com.groupe2.backspringboot.auth.security.services;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.groupe2.backspringboot.auth.exception.TokenRefreshException;
import com.groupe2.backspringboot.auth.model.RefreshToken;
import com.groupe2.backspringboot.auth.repository.RefreshTokenRepository;
import com.groupe2.backspringboot.auth.repository.UserRepository;

@Service
public class RefreshTokenService {
	
	@Value("${groupe2.app.jwtRefreshExpirationMs}")
	private long refreshTokenDurationMs;
	@Autowired
	private RefreshTokenRepository refreshTokenRepository;
	@Autowired
	private UserRepository userRepository;
	
	public Optional<RefreshToken> findByToken(String token) {
		return refreshTokenRepository.findByToken(token);
	}
	
	public RefreshToken createRefreshToken(int userId) {
		RefreshToken refreshToken = new RefreshToken();
		
		refreshToken.setUser(userRepository.findById(userId).get());
		refreshToken.setExpiryDate(Instant.now().plusMillis(refreshTokenDurationMs));
		refreshToken.setToken(UUID.randomUUID().toString());
		
		refreshToken = refreshTokenRepository.save(refreshToken);
		
		return refreshToken;
	}
	
	public RefreshToken verifyExpiration(RefreshToken token) {
		if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
			refreshTokenRepository.delete(token);
			throw new TokenRefreshException(token.getToken(), "Refresh Token was expired. Please signin again");
		}
		return token;
	}
	
	@Transactional
	public int deleteByUserId(int userId) {
		return refreshTokenRepository.deleteByUser(userRepository.findById(userId).get());
	}
	
}
