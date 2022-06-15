package com.groupe2.backspringboot.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.groupe2.backspringboot.auth.model.UserDao;

@Repository
public interface UserRepository extends JpaRepository<UserDao, Integer> {
	Optional<UserDao> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
}
