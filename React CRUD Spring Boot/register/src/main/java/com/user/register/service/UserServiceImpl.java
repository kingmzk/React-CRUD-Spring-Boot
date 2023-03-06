package com.user.register.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.register.model.User;
import com.user.register.repository.UserRepository;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User addUser(User user) {

		System.out.println("1234");
		return userRepository.save(user);
	}

	@Override
	public List<User> getUsers() {
		return userRepository.findAll();
	}

	@Override
	public User getUser(long userId) {
	    int i = (int) userId;
	    return userRepository.findById(i).get();
	}

	@Override
	public User updateUser(User user) {
		userRepository.save(user);
		return user;
	}

	@Override
	public User deleteUser(long userId) {
	    int id = (int) userId;
	    User user = userRepository.findById(id).get();
	    userRepository.delete(user);
	    return user;
	}

	}

