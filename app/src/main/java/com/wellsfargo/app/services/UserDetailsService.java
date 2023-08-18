package com.wellsfargo.app.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

//import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wellsfargo.app.entities.UserDetails;
import com.wellsfargo.app.repositories.UserDetailsRepo;

@Service
public class UserDetailsService {
	@Autowired
	private UserDetailsRepo userDetailsRepo;

	public Optional<UserDetails> findUserDetailsById(Integer id) {
		// TODO Auto-generated method stub
		Optional<UserDetails> temp =  userDetailsRepo.findById( id);
		return temp;
	}
}
