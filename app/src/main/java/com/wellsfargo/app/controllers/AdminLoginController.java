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
	AdminDetailsService adminDetailsService;
	@PostMapping("/validateAdmin") 
	public ResponseEntity<String> validateUserDetails(@RequestBody LoginHelper user) {
		return ResponseEntity.ok(adminDetailsService.validateUser(user));
	}
	@GetMapping("/admin")
	public String home() {
		return "Hello, Admin. Login here!!";
	}
	@PostMapping("/AdminLogin/authenticate")
	public JWTResponse authenticate(@RequestBody JWTRequest jwtRequest) throws Exception{

		try {
			//check if admin exists in db

			if(!adminDetailsService.validateUser(new LoginHelper(Integer.parseInt(jwtRequest.getUsername()),jwtRequest.getPassword())).equals("credentials are correct")){
				return null;
			};



			System.out.println("bp1");
			System.out.println(jwtRequest.getUsername());
			System.out.println(jwtRequest.getPassword());
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
//		System.out.println("bp3");
//		System.out.println("ULC getPAss"+ jwtRequest.getPassword());
		String consolidated = jwtRequest.getUsername();

		final UserDetails userDetails
				= adminDetailsService.loadUserByUsername(consolidated);
		System.out.println("bp4");

		final String token =
				jwtUtility.generateToken(userDetails);
		System.out.println("bp5");

		return new JWTResponse(token);
	}
}
