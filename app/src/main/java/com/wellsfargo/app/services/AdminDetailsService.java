package com.wellsfargo.app.services;

import com.wellsfargo.app.entities.UsersDetails;
import com.wellsfargo.app.repositories.UsersDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.wellsfargo.app.helper.LoginHelper;

import java.util.ArrayList;

@Service
public class AdminDetailsService implements UserDetailsService {
	@Autowired
	private UsersDetailsRepo usersDetailsRepo;

	public String validateUser(LoginHelper user) {
		// TODO Auto-generated method stub
		int employeeId = user.getEmployeeId();
		String password = user.getPassword();
		System.out.println("eid: " + employeeId);
		System.out.println("password: " + password);
		if(!usersDetailsRepo.existsById(employeeId)){
			System.out.println("Invalid User");
			return "Invalid User";}
		UsersDetails details = usersDetailsRepo.findById(Integer.valueOf(employeeId)).get();
		if(password.equals(details.getPassword())&&(details.getIsAdmin())) {
			System.out.println("Correct credentials");
			return "credentials are correct";
		}
		else if(password.equals(details.getPassword())&&!(details.getIsAdmin())) {
			System.out.println("Not an Admin, but a User");
			return "Not An Admin";
		}
		System.out.println("Password is Incorrect");
		return "Password is Incorrect";
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		UsersDetails user = usersDetailsRepo.findById(Integer.parseInt(username)).get();

//		String input = "abc***def";
//		String[] parts = input.split("\\*\\*\\*");
//		System.out.println(Arrays.toString(parts));
//		System.out.println("payload:"+ payload);
//		String[] preList = payload.split("\\*\\*\\*");
//		//logic to get the user from the Database
//		System.out.println(Arrays.toString(preList));
		return new User(String.valueOf( user.getEmployeeId()), user.getPassword(), new ArrayList<>());

	}
}

