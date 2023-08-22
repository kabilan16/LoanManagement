package com.wellsfargo.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.app.entities.UserDetails;
import com.wellsfargo.app.helper.LoginHelper;
import com.wellsfargo.app.repositories.UserDetailsRepo;

@Service
public class AdminDetailsService {
	@Autowired
	private UserDetailsRepo userDetailsRepo;

	public String validateUser(LoginHelper user) {
		// TODO Auto-generated method stub
		int employeeId = user.getEmployeeId();
		String password = user.getPassword();

		if(!userDetailsRepo.existsById(employeeId))
			return "Invalid User";
		UserDetails details = userDetailsRepo.findById(employeeId).get();
		if(password.equals(details.getPassword())&&(details.getIsAdmin()))
			return "credentials are correct";
		else if(!details.getIsAdmin())
			return "Not A Admin";
		return "Password is Incorrect";
	}

}

