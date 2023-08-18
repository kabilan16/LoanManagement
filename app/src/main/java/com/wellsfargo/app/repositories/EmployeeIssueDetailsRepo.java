package com.wellsfargo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.app.entities.EmployeeIssueDetails;

//import com.wellsfargo.app.entities.EmployeeMaster;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeIssueDetailsRepo extends JpaRepository<EmployeeIssueDetails, Integer> {

}
