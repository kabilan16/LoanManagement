package com.wellsfargo.app.services;

import com.wellsfargo.app.entities.EmployeeMaster;

import java.util.Optional;

public interface EmployeeMasterService {
	EmployeeMaster createEmployeeMaster(EmployeeMaster employeeMaster);
	Optional<EmployeeMaster> findEmployeeMasterById(int employeeId);
	EmployeeMaster updateEmployeeMaster(EmployeeMaster employeeMaster);
	EmployeeMaster createEmployeeMaster(EmployeeMaster employeeMaster);
}
