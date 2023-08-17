package com.wellsfargo.app.controllers;

import com.wellsfargo.app.entities.EmployeeCardDetails;
import com.wellsfargo.app.entities.LoanCardDetails;
import com.wellsfargo.app.services.EmployeeCardDetailsService;
import com.wellsfargo.app.services.EmployeeMasterService;
import com.wellsfargo.app.services.LoanCardDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wellsfargo.app.entities.EmployeeMaster;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

class ApplyLoanData{
	public String loanId;
	public String employeeId;
}

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeMasterController{
	@Autowired
	private EmployeeMasterService employeeMasterService;

	@Autowired
	private LoanCardDetailsService loanCardDetailsService;

	@Autowired
	private EmployeeCardDetailsService employeeCardDetailsService;

	@GetMapping("/getEmployee")
	public Optional<EmployeeMaster> getEmployeeMaster(@RequestBody EmployeeMaster employee){
		return employeeMasterService.getEmployeeMasterById(employee.getEmployeeId());
	}

	@PostMapping("/addEmployee")
	public EmployeeMaster addEmployeeMaster(@RequestBody EmployeeMaster newEmployee){
		EmployeeMaster employee = employeeMasterService.addEmployerMaster(newEmployee);
		return employee;
	}

	@PostMapping("/loginEmployee")
	@ResponseBody
	public Object loginEmployeeMaster(@RequestBody EmployeeMasterLogin empLogin){
		Object response;
		Optional<EmployeeMaster> existingEmployee = employeeMasterService.getEmployeeMasterById(empLogin.getEmployeeId());
		if(existingEmployee.isPresent()){
			if(existingEmployee.get().getPassword().equals(empLogin.getPassword())){
				response = existingEmployee.get();
			}
			else{
				response = new String("Wrong password");
			}
		}
		else{
			response = new String("Invalid employee ID");
		}
		return response;
	}

	@PostMapping("/applyLoan")
	public void applyLoan(@RequestBody ApplyLoanData loanData){
		//String loanId = employeeCardDetails.get()

		LoanCardDetails loanCardDetails = loanCardDetailsService.getLoanCardById(loanData.loanId);
		EmployeeMaster employeeMaster = employeeMasterService.getEmployeeMasterById(loanData.employeeId).get();

		EmployeeCardDetails employeeCardDetails = new EmployeeCardDetails();
		List<EmployeeCardDetails> l =new ArrayList<EmployeeCardDetails>();
		l.add(employeeCardDetails);

		loanCardDetails.setEmployeeCardDetails(l);
		employeeMaster.setEmployeeCardDetails(l);
		employeeCardDetails.setLoanCardDetails(loanCardDetails);
		employeeCardDetails.setEmployeeMaster(employeeMaster);

		loanCardDetailsService.addLoanCard(loanCardDetails);
		employeeCardDetailsService.addEmployeeCardDetails(employeeCardDetails);
		employeeMasterService.addEmployeeMaster(employeeMaster);
	}

}

	

