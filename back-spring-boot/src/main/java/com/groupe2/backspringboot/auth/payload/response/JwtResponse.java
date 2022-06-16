package com.groupe2.backspringboot.auth.payload.response;

import java.util.List;

import com.groupe2.backspringboot.auth.model.UserContactInformation;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
public class JwtResponse {

	private String accessToken;
	@NonNull
	private String tokenType = "Bearer";
	private String refreshToken;
	private int id;
	private String username;
	private String email;
	private UserContactInformation contact;
	@Setter(value = AccessLevel.NONE)
	private List<String> roles;

	public JwtResponse(String accessToken, String refreshToken, int id, String username, String email,
			UserContactInformation contact, List<String> roles) {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
		this.id = id;
		this.username = username;
		this.email = email;
		this.contact = contact;
		this.roles = roles;
	}

}
