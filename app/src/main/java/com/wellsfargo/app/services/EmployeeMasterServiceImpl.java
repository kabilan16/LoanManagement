package com.wellsfargo.app.services;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.wellsfargo.app.entities.EmployeeMaster;
import com.wellsfargo.app.repositories.EmployeeMasterRepo;

@Service
public class EmployeeMasterServiceImpl implements EmployeeMasterService{

	private final EmployeeMasterRepo employeeMasterRepo;
	@Override
	public EmployeeMaster createEmployeeMaster(EmployeeMaster employeeMaster) {

		return employeeMasterRepo.save(employeeMaster);
	}
	@Override
	public	Optional<EmployeeMaster> findEmployeeMasterById(int employeeId){
		return employeeMasterRepo.findBy(employeeId);
	}
	@Override
	EmployeeMaster updateEmployeeMaster(EmployeeMaster employeeMaster) {
	return 	null;

	}
	@Override
	public com.wellsfargo.app.services.EmployeeMaster createEmployeeMaster(
			com.wellsfargo.app.services.EmployeeMaster employeeMaster) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public com.wellsfargo.app.services.EmployeeMaster updateEmployeeMaster(
			com.wellsfargo.app.services.EmployeeMaster employeeMaster) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public com.wellsfargo.app.services.EmployeeMaster createEmployeeMaster(
			com.wellsfargo.app.services.EmployeeMaster employeeMaster) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public com.wellsfargo.app.services.EmployeeMaster updateEmployeeMaster(
			com.wellsfargo.app.services.EmployeeMaster employeeMaster) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
