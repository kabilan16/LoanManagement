package com.wellsfargo.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.wellsfargo.app.repositories.LoanCardDetailsRepo;
import com.wellsfargo.app.entities.LoanCardDetails;
@Service
public class LoanCardDetailsService {
	@Autowired
	private LoanCardDetailsRepo loanCardDetailsRepo;

	public Optional<LoanCardDetails> findLoanCardDetailsById(Integer id) {
		// TODO Auto-generated method stub
		return loanCardDetailsRepo.findById(id);
	}

	public LoanCardDetails createLoanCardInfo(LoanCardDetails loan) {
		// TODO Auto-generated method stub
		return loanCardDetailsRepo.save(loan);
	}

	public LoanCardDetails updateLoanCardDetails(LoanCardDetails loan) {
		// TODO Auto-generated method stub
		LoanCardDetails details = loanCardDetailsRepo.getReferenceById(loan.getLoanId());
		details.setDurationInMonths(loan.getDurationInMonths());
		return loanCardDetailsRepo.save(details);
		

	}

	public String deleteDetailsById(Integer id) {
		// TODO Auto-generated method stub
		loanCardDetailsRepo.deleteById(id);
		return "Deleted Successfully!";
	}

	public List<LoanCardDetails> findAllLoanDetails() {
		// TODO Auto-generated method stub
		return loanCardDetailsRepo.findAll();
	}
	
	
	
}
