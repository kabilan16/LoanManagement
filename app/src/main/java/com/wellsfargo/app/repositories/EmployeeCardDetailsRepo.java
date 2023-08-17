package com.wellsfargo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.app.entities.EmployeeCardDetails;

public interface EmployeeCardDetailsRepo extends JpaRepository<EmployeeCardDetails, Integer> {

}
