package com.groupe2.backspringboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.groupe2.backspringboot.model.UserDao;
import com.groupe2.backspringboot.model.UserDto;
import com.groupe2.backspringboot.repository.UserRepository;

@Component
public class UserService {

	@Autowired
	private UserRepository userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Transactional(rollbackFor = Exception.class)
	public UserDao save(UserDto user) {
		UserDao newUser = new UserDao();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userDao.save(newUser);
	}

}
