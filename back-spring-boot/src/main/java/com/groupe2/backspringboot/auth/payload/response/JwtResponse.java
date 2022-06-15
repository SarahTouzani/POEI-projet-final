package com.groupe2.backspringboot.auth.payload.response;

import java.util.List;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
//@RequiredArgsConstructor
public class JwtResponse {

	private String accessToken;
	@NonNull
	private String tokenType = "Bearer";
	private String refreshToken;
	private int id;
	private String username;
	private String email;
	@Setter(value = AccessLevel.NONE)
	private List<String> roles;

	public JwtResponse(String accessToken, String refreshToken, int id, String username, String email,
			List<String> roles) {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
		this.id = id;
		this.username = username;
		this.email = email;
		this.roles = roles;
	}

}
