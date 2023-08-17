package com.wellsfargo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.app.entities.EmployeeIssueDetails;

//import com.wellsfargo.app.entities.EmployeeMaster;

public interface EmployeeIssueDetailsRepo extends JpaRepository<EmployeeIssueDetails, Integer> {

}
