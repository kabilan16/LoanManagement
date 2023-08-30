package com.wellsfargo.app.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wellsfargo.app.entities.EmployeeIssueDetails;

//import com.wellsfargo.app.entities.EmployeeMaster;
@Repository
public interface EmployeeIssueDetailsRepo extends JpaRepository<EmployeeIssueDetails, Integer> {
	public List<EmployeeIssueDetails> findByEmployeeMaster_employeeId(Integer employeeId);
	}
