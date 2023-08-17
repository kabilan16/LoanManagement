package com.wellsfargo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.wellsfargo.app.entities.EmployeeMaster;


public interface EmployeeMasterRepo extends JpaRepository<EmployeeMaster, Integer>{

	EmployeeMaster save(EmployeeMaster employeeMaster);

}
