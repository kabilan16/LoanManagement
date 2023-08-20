package com.wellsfargo.app.controllers;


import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.app.entities.AdminDetails;
import com.wellsfargo.app.services.AdminDetailsService;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminLoginController {
	@Autowired
	private AdminDetailsService adminDetailsService;
	@GetMapping("/getAdmin/{id}")
	public ResponseEntity<AdminDetails> getAdminDetails(@PathVariable Integer id)
	{
		return ResponseEntity.ok(adminDetailsService.findAdminDetailsById(id).get());
	}
}
