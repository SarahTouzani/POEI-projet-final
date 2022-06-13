package com.groupe2.backspringboot.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.groupe2.backspringboot.model.UserDao;

@Repository
public interface UserRepository extends CrudRepository<UserDao, Integer> {
	public UserDao findByUsername(String username);
}
