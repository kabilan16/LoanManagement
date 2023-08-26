package com.wellsfargo.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.wellsfargo.app.entities.UsersDetails;
import com.wellsfargo.app.helper.LoginHelper;
import com.wellsfargo.app.repositories.UsersDetailsRepo;

import java.util.ArrayList;

@Service
public class AdminDetailsService implements UserDetailsService {
	@Autowired
	private UsersDetailsRepo usersDetailsRepo;

	public String validateUser(LoginHelper user) {
		// TODO Auto-generated method stub
		int employeeId = user.getEmployeeId();
		String password = user.getPassword();

		if(!usersDetailsRepo.existsById(employeeId))
			return "Invalid User";
		UsersDetails details = usersDetailsRepo.findById(employeeId).get();
		if(password.equals(details.getPassword())&&(details.getIsAdmin()))
			return "credentials are correct";
		else if(!details.getIsAdmin())
			return "Not A Admin";
		return "Password is Incorrect";
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		//logic to get the user from the Database
		return new User("admin","password",new ArrayList<>());

	}
}

