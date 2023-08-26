package com.wellsfargo.app.controllers;

import com.wellsfargo.app.utility.JWTUtility;
import com.wellsfargo.app.entities.JWTResponse;
import com.wellsfargo.app.entities.JWTRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
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
	private JWTUtility jwtUtility;

	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private UsersDetailsService usersDetailsService;
	@PostMapping("/validateUser")
	public ResponseEntity<String> validateUserDetails(@RequestBody LoginHelper user) {
		return ResponseEntity.ok(usersDetailsService.validateUser(user));
	}
	@PostMapping("/authenticate")
	public JWTResponse authenticate(@RequestBody JWTRequest jwtRequest) throws Exception{

		try {
			System.out.println("bp1");
			Authentication auth = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
							jwtRequest.getUsername(),
							jwtRequest.getPassword()
					)
			);
			System.out.println("bp2");
			System.out.println("auth manager complete");
			System.out.println(auth.isAuthenticated());
			System.out.println(auth.getDetails());
		} catch (Exception e) {
			System.out.println("bp7");
			e.printStackTrace();
			throw new Exception("INVALID_CREDENTIALS", e);
		}
		System.out.println("bp3");


		final UserDetails userDetails
				= usersDetailsService.loadUserByUsername(jwtRequest.getUsername());
		System.out.println("bp4");

		final String token =
				jwtUtility.generateToken(userDetails);
		System.out.println("bp5");

		return new JWTResponse(token);
	}
}