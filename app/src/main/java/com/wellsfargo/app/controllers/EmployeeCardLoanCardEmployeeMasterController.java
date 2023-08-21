package com.wellsfargo.app.controllers;

import com.wellsfargo.app.DTO.EmployeeCardLoanCardEmployeeMasterDTO;
import com.wellsfargo.app.DTO.EmployeeItemMasterDetailsDTO;
import com.wellsfargo.app.services.EmployeeCardLoanCardEmployeeMasterService;
import com.wellsfargo.app.services.EmployeeItemIssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeCardLoanCardEmployeeMasterController {
    @Autowired
    EmployeeCardLoanCardEmployeeMasterService mapService;

    @GetMapping("/getDetails/{id}")
    public List<EmployeeCardLoanCardEmployeeMasterDTO> getAllDetails(@PathVariable Integer id) {
        List<EmployeeCardLoanCardEmployeeMasterDTO> details = mapService.getAllDetails(id);
        return details;

    }
}
