package com.wellsfargo.app.controllers;
import  com.wellsfargo.app.DTO.EmployeeItemMasterDetailsDTO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.app.services.EmployeeItemIssueService;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeItemIssueController {
	@Autowired
	EmployeeItemIssueService mapService;
	
	@GetMapping("/getDetails/{id}")
	public List<EmployeeItemMasterDetailsDTO> getAllDetails(@PathVariable Integer id) {
		List<EmployeeItemMasterDetailsDTO> details = mapService.getAllDetails(id);
		return details;
	}
}
