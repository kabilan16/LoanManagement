package com.wellsfargo.app.services;
import com.wellsfargo.app.entities.EmployeeCardDetails;
import com.wellsfargo.app.repositories.EmployeeCardDetailsRepo;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeCardDetailsService {
	@Autowired
	private EmployeeCardDetailsRepo employeeCardDetailsRepo;

	public EmployeeCardDetails createEmployeeCardDetails(EmployeeCardDetails employeeCardDetails) {
		return employeeCardDetailsRepo.save(employeeCardDetails);
	}

	public Optional<EmployeeCardDetails> findEmployeeCardDetailsById(Integer id) {
		return employeeCardDetailsRepo.findById(id);
	}

	//public EmployeeCardDetails updateEmployeeCardDetails(EmployeeCardDetails employeeCardDetails) {
//		EmployeeCardDetails temp = employeeCardDetailsRepo.getReferenceById(employeeCardDetails.getEmployeeId());
//		temp.set
//	}

	public String deleteEmployeeCardDetailsById(Integer id) {
		employeeCardDetailsRepo.deleteById(id);
		return "Employee card deleted successfully!";
	}
}
