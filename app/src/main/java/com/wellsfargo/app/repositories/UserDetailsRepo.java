package com.wellsfargo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.app.entities.UserDetails;

public interface UserDetailsRepo extends JpaRepository<UserDetails, Integer>{

}
