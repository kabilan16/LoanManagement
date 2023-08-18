package com.wellsfargo.app.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.app.services.UserDetailsService;
import com.wellsfargo.app.entities.UserDetails;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserLoginController {
	@Autowired
	private UserDetailsService userDetailsService;
	@GetMapping("/getUser/{id}") 
	public ResponseEntity<UserDetails> getUserDetails(@PathVariable Integer id) {
		return ResponseEntity.ok(userDetailsService.findUserDetailsById(id).get());
	}

}