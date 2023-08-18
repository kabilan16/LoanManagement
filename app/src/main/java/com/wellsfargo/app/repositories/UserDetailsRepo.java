package com.wellsfargo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.app.entities.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepo extends JpaRepository<UserDetails, Integer>{

}
