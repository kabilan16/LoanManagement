package com.wellsfargo.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.app.helper.AddLoanHelper;
import com.wellsfargo.app.services.AddLoanService;
@RestController
@CrossOrigin("http://localhost:3000")
public class AddLoanController {
	@Autowired
	AddLoanService addLoanService;
	
	@PostMapping("/applyForLoan")
	 public ResponseEntity<String> addLoan(@RequestBody AddLoanHelper loan ){
    	String savedLoan = addLoanService.addLoan(loan);
		return new ResponseEntity<>(savedLoan, HttpStatus.CREATED);
    }
	

	

}
