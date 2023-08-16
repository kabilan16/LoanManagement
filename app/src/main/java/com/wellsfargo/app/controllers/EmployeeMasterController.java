package com.wellsfargo.app.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.app.entities.EmployeeMaster;
import com.wellsfargo.app.repositories.EmployeeMasterRepo;

@RestController
public class EmployeeMasterController {
	private EmployeeMasterRepo employeeMasterRepo;

	// dependency injection
	public EmployeeMasterController(EmployeeMasterRepo employeeMasterRepo) {

		this.employeeMasterRepo= employeeMasterRepo;
	}

	@PostMapping
	public EmployeeMaster createEmployeeMaster(@RequestBody EmployeeMaster employeeMaster) {

		return employeeMasterRepo.save(employeeMaster);
	}

}

	

