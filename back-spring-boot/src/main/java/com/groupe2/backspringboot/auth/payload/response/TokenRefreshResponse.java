package com.groupe2.backspringboot.auth.payload.response;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
public class TokenRefreshResponse {

	private String accessToken;
	private String refreshToken;
	@NonNull
	private String tokenType = "Bearer";

	public TokenRefreshResponse(String accessToken, String refreshToken) {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}

}
