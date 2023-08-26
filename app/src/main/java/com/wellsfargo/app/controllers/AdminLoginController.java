package com.wellsfargo.app.controllers;

import com.wellsfargo.app.entities.JWTRequest;
import com.wellsfargo.app.entities.JWTResponse;
import com.wellsfargo.app.utility.JWTUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;


import com.wellsfargo.app.helper.LoginHelper;
import com.wellsfargo.app.services.AdminDetailsService;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminLoginController {
	@Autowired
	private JWTUtility jwtUtility;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	AdminDetailsService adminLoginService;
	@PostMapping("/validateAdmin") 
	public ResponseEntity<String> validateUserDetails(@RequestBody LoginHelper user) {
		return ResponseEntity.ok(adminLoginService.validateUser(user));
	}
	@GetMapping("/admin")
	public String home() {
		return "Hello, Admin. Login here!!";
	}
	@PostMapping("/AdminLogin/authenticate")
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
				= adminLoginService.loadUserByUsername(jwtRequest.getUsername());
		System.out.println("bp4");

		final String token =
				jwtUtility.generateToken(userDetails);
		System.out.println("bp5");

		return new JWTResponse(token);
	}
}
