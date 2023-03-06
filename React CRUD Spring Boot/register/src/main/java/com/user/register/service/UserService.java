package com.user.register.service;


import java.util.List;

import com.user.register.model.User;
public interface UserService {

	public User addUser(User user);

	public List<User> getUsers();
	
	public User getUser(long userId);

	public User updateUser(User user);

	public User deleteUser(long userId);

}
