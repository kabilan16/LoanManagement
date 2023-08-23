package com.wellsfargo.app.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.app.services.UsersDetailsService;
import com.wellsfargo.app.helper.LoginHelper;

@RestController
@CrossOrigin("http://localhost:3000")
public class UsersLoginController {
	@Autowired
	private UsersDetailsService usersDetailsService;
	@PostMapping("/validateUser") 
	public ResponseEntity<String> validateUserDetails(@RequestBody LoginHelper user) {
		return ResponseEntity.ok(usersDetailsService.validateUser(user));
	}

}