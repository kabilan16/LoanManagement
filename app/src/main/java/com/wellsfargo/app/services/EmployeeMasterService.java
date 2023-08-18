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
}
