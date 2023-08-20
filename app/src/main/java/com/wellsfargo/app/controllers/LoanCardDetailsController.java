package com.wellsfargo.app.controllers;

import com.wellsfargo.app.entities.EmployeeMaster;
import com.wellsfargo.app.entities.LoanCardDetails;
import com.wellsfargo.app.services.LoanCardDetailsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class LoanCardDetailsController {
    @Autowired
    private LoanCardDetailsService loanCardDetailsService;
    
    @GetMapping("/getLoanDetails/{id}")
    public ResponseEntity<LoanCardDetails> getLoanCardDetails(@PathVariable Integer id){
    	return ResponseEntity.ok(loanCardDetailsService.findLoanCardDetailsById(id).get());
    }
    @PostMapping("/addLoanDetails")
    public ResponseEntity<LoanCardDetails> createLoanCardDetails(@RequestBody LoanCardDetails loan ){
    	LoanCardDetails savedLoan = loanCardDetailsService.createLoanCardInfo(loan);
		return new ResponseEntity<>(savedLoan, HttpStatus.CREATED);
    }
    @PutMapping("/updateLoanDetails")
    public ResponseEntity<LoanCardDetails> updateLoanardDetails(@RequestBody LoanCardDetails loan)
    {
    	LoanCardDetails updatedLoan = loanCardDetailsService.updateLoanCardDetails(loan);
    	return new ResponseEntity<>(updatedLoan, HttpStatus.CREATED);
    }
    @DeleteMapping("/deleteLoanDetails/{id}")
    public ResponseEntity<String> deleteDetailsById(@PathVariable Integer id)
    { 
    	return ResponseEntity.ok(loanCardDetailsService.deleteDetailsById(id));
    }
    @GetMapping("/getAllLoanCardDetails")
    public ResponseEntity<List<LoanCardDetails>> getAllLoanDetails()
    {
    	return ResponseEntity.ok(loanCardDetailsService.findAllLoanDetails());
    }
 
}
