package com.wellsfargo.app.controllers;


import com.wellsfargo.app.entities.EmployeeCardDetails;
import com.wellsfargo.app.services.EmployeeCardDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeCardDetailsController {
    @Autowired
    private EmployeeCardDetailsService employeeCardDetailsService;

    @PostMapping("/addEmployeeCardDetails")
    public EmployeeCardDetails addEmployeeCardDetails(EmployeeCardDetails employeeCardDetails){
        return employeeCardDetailsService.addEmployeeCardDetails(employeeCardDetails);
    }
}
