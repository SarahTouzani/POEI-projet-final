package com.groupe2.backspringboot.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -6396529052799119271L;
	private final String jwtToken;
	private final UserDao user;

}
