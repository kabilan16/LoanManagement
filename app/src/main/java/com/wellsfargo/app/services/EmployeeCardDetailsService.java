package com.wellsfargo.app.services;
import com.wellsfargo.app.entities.EmployeeCardDetails;
import com.wellsfargo.app.repositories.EmployeeCardDetailsRepo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeCardDetailsService {
	@Autowired
	private EmployeeCardDetailsRepo employeeCardDetailsRepo;

	public Optional<EmployeeCardDetails> findCardUserById(Integer id) {
		// TODO Auto-generated method stub
		return employeeCardDetailsRepo.findById(id) ;
	}
}
