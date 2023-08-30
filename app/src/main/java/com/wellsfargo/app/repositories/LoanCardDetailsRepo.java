package com.wellsfargo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.app.entities.LoanCardDetails;

import org.springframework.stereotype.Repository;

@Repository
public interface LoanCardDetailsRepo extends JpaRepository<LoanCardDetails, Integer>{

}
