package com.wellsfargo.app.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.wellsfargo.app.entities.EmployeeMaster;
import com.wellsfargo.app.repositories.EmployeeMasterRepo;

@Service
public class EmployeeMasterService {
	@Autowired
	private EmployeeMasterRepo employeeMasterRepo;


	public Optional<EmployeeMaster> findUserDetailsById(Integer id) {
		// TODO Auto-generated method stub
		return employeeMasterRepo.findById(id);
	}


	public EmployeeMaster createEmployee(EmployeeMaster employee) {
		// TODO Auto-generated method stub
		return employeeMasterRepo.save(employee);

	}

	public EmployeeMaster editEmployee(EmployeeMaster employee) {
		EmployeeMaster temp = employeeMasterRepo.getReferenceById(employee.getEmployeeId());
		temp.setDesignation(employee.getDesignation());
		return employeeMasterRepo.save(temp);

	}

	public String deleteEmployeebyId(Integer id) {
		employeeMasterRepo.deleteById(id);
		return "Employee deleted successfully";
	}
}
