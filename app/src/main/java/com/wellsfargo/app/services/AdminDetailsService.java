package com.wellsfargo.app.services;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.app.entities.AdminDetails;
import com.wellsfargo.app.repositories.AdminDetailsRepo;
@Service
public class AdminDetailsService {
	@Autowired
	private AdminDetailsRepo adminDetailsRepo;

	public Optional<AdminDetails> findAdminDetailsById(Integer id) {
		// TODO Auto-generated method stub
		Optional<AdminDetails> temp =  adminDetailsRepo.findById( id);
		return temp;
	}
}
