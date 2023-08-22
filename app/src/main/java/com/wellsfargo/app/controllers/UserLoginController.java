package com.wellsfargo.app.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.app.services.UserDetailsService;
import com.wellsfargo.app.entities.UserDetails;
import com.wellsfargo.app.helper.LoginHelper;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserLoginController {
	@Autowired
	private UserDetailsService userDetailsService;
	@PostMapping("/validateUser") 
	public ResponseEntity<String> validateUserDetails(@RequestBody LoginHelper user) {
		return ResponseEntity.ok(userDetailsService.validateUser(user));
	}

}