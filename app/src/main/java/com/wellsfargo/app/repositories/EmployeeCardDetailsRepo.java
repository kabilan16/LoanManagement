package com.wellsfargo.app.repositories;

import com.wellsfargo.app.entities.EmployeeIssueDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.app.entities.EmployeeCardDetails;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeCardDetailsRepo extends JpaRepository<EmployeeCardDetails, Integer> {
    public List<EmployeeCardDetails> findByEmployeeMaster_employeeId(Integer employeeId);

}
