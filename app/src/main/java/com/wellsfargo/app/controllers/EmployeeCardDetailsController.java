package com.wellsfargo.app.controllers;


import com.wellsfargo.app.entities.EmployeeCardDetails;
import com.wellsfargo.app.services.EmployeeCardDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeCardDetailsController {
    @Autowired
    private EmployeeCardDetailsService employeeCardDetailsService;

    @PostMapping("/addEmployeeCardDetails")
    public ResponseEntity<EmployeeCardDetails> createEmployeeCardDetails(@RequestBody EmployeeCardDetails employeeCardDetails){
        EmployeeCardDetails ecd = employeeCardDetailsService.createEmployeeCardDetails(employeeCardDetails);
        return new ResponseEntity<>(ecd, HttpStatus.CREATED);
    }

    @GetMapping("/getEmployeeCardDetails/{id}")
    public ResponseEntity<EmployeeCardDetails> getEmployeeCardDetails(@PathVariable Integer id){
        return ResponseEntity.ok(employeeCardDetailsService.findEmployeeCardDetailsById(id).get());
    }

//    @PutMapping("/updateEmployeeCardDetails")
//    public ResponseEntity<EmployeeCardDetails> updateEmployeeCardDetails(@RequestBody EmployeeCardDetails employeeCardDetails){
//        EmployeeCardDetails ecd = employeeCardDetailsService.updateEmployeeCardDetails(employeeCardDetails);
//        return new ResponseEntity<>(ecd,HttpStatus.CREATED);
//    }


    @DeleteMapping("/deleteEmployeeCardDetails/{id}")
    public ResponseEntity<String> deleteEmployeeCardDetails(@PathVariable Integer id){
        return ResponseEntity.ok(employeeCardDetailsService.deleteEmployeeCardDetailsById(id));
    }
}
