package com.user.register.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.register.model.User;
import com.user.register.service.UserService;


//@RequestMapping("/user")
@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/user")
	public String addUser(@RequestBody User user) {
		
		System.out.println(user.getEmail());
		
		userService.addUser(user);
		return "New User Added";
		
	}
	
	@GetMapping("/users")
	public List<User> getUsers()
	{
		return this.userService.getUsers();
	}
	
	@GetMapping("/users/{userId}")
	public User getUser(@PathVariable String userId) {
	    long id = Long.parseLong(userId);
	    return this.userService.getUser(id);
	}
	
	@PutMapping("/user")
	public  User updateUser(@RequestBody User user)
	{
		return this.userService.updateUser(user);
	}
	
	@DeleteMapping("/user/{userId}")
	public User deleteUser(@PathVariable String userId)
	{
		return this.userService.deleteUser(Long.parseLong(userId));
	}

}
