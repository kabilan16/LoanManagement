package com.wellsfargo.app.controllers;

import com.wellsfargo.app.entities.LoanCardDetails;
import com.wellsfargo.app.services.LoanCardDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class LoanCardDetailsController {
    @Autowired
    private LoanCardDetailsService loanCardDetailsService;

    @PostMapping("/addLoanCard")
    public LoanCardDetails addLoanCard(@RequestBody LoanCardDetails loanCardDetails){
        return loanCardDetailsService.addLoanCard(loanCardDetails);
    }

    @PostMapping("/getLoanCardByLoanType")
    @ResponseBody
    public LoanCardDetails getLoanCardByLoanType(@RequestBody LoanCardDetails loanCardDetails){
        return loanCardDetailsService.getLoanCardByLoanType(loanCardDetails.getLoanType());
    }

}
