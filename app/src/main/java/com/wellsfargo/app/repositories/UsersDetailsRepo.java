package com.wellsfargo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.app.entities.UsersDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersDetailsRepo extends JpaRepository<UsersDetails, Integer>{

}
