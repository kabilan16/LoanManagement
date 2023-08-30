package com.wellsfargo.app.controllers;

//import com.wellsfargo.app.entities.EmployeeCardDetails;
//import com.wellsfargo.app.entities.LoanCardDetails;
//import com.wellsfargo.app.services.EmployeeCardDetailsService;
import com.wellsfargo.app.services.EmployeeMasterService;
//import com.wellsfargo.app.services.LoanCardDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wellsfargo.app.entities.EmployeeMaster;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeMasterController{


	@Autowired
	private EmployeeMasterService employeeMasterService;
	@GetMapping("/getEmployee/{id}") 
	public ResponseEntity<EmployeeMaster> getUserById(@PathVariable Integer id){
		return ResponseEntity.ok(employeeMasterService.findUserDetailsById(id).get());
	}
	
	@PostMapping("/addEmployee")
	public ResponseEntity<EmployeeMaster> createEmployee(@RequestBody EmployeeMaster employee){
		EmployeeMaster savedEmployee = employeeMasterService.createEmployee(employee);
		return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);}
	
	@PutMapping("/editEmployee")
	public ResponseEntity<EmployeeMaster> editEmployee(@RequestBody EmployeeMaster employee){
		EmployeeMaster editedEmployee = employeeMasterService.editEmployee(employee);
		return new ResponseEntity<>(editedEmployee,HttpStatus.CREATED);
	}

	@DeleteMapping("/deleteEmployee/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Integer id){
		return ResponseEntity.ok(employeeMasterService.deleteEmployeebyId(id));
	}
	@GetMapping("/getAllEmployee")
	public ResponseEntity<List<EmployeeMaster>> getAllEmployee(){
		return ResponseEntity.ok(employeeMasterService.findEmployeeDetails());
	}
}

	

