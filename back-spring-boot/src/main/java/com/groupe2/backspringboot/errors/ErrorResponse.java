package com.groupe2.backspringboot.errors;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class ErrorResponse {

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
	private LocalDateTime timestamp;
	private HttpStatus error;
	private int status;
	private String message;

	private ErrorResponse() {
		timestamp = LocalDateTime.now();
	}

	public ErrorResponse(HttpStatus status) {
		this();
		this.error = status;
		this.status = status.value();
	}

	public ErrorResponse(HttpStatus status, String message) {
		this();
		this.error = status;
		this.status = status.value();
		this.message = message;
	}

}
