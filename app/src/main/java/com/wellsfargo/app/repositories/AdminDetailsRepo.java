package com.wellsfargo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wellsfargo.app.entities.AdminDetails;

@Repository
public interface AdminDetailsRepo extends JpaRepository<AdminDetails, Integer>{

}
