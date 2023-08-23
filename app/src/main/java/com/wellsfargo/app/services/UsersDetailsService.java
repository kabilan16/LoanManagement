package com.wellsfargo.app.services;

import org.springframework.beans.factory.annotation.Autowired;

//import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wellsfargo.app.entities.UsersDetails;
import com.wellsfargo.app.helper.LoginHelper;
import com.wellsfargo.app.repositories.UsersDetailsRepo;

@Service
public class UsersDetailsService {
	@Autowired
	private UsersDetailsRepo usersDetailsRepo;



	public String validateUser(LoginHelper user) {
		// TODO Auto-generated method stub
		int employeeId = user.getEmployeeId();
		String password = user.getPassword();
	
		if(!usersDetailsRepo.existsById(employeeId))
			return "Invalid User";
		UsersDetails details = usersDetailsRepo.findById(employeeId).get();
		if(password.equals(details.getPassword())&&!(details.getIsAdmin()))
			return "credentials are correct";
		else if(details.getIsAdmin())
			return "Not A User";
		return "Password is Incorrect";
	}
}
