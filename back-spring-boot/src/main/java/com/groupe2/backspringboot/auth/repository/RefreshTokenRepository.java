package com.groupe2.backspringboot.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.groupe2.backspringboot.auth.model.RefreshToken;
import com.groupe2.backspringboot.auth.model.UserDao;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Integer> {

	Optional<RefreshToken> findByToken(String token);

	@Modifying
	int deleteByUser(UserDao user);
}
