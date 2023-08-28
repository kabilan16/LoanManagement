/**
 * 
 */
package com.wellsfargo.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import com.wellsfargo.app.entities.EmployeeCardDetails;
import com.wellsfargo.app.entities.EmployeeIssueDetails;
import com.wellsfargo.app.entities.EmployeeMaster;
import com.wellsfargo.app.entities.ItemMaster;
import com.wellsfargo.app.entities.LoanCardDetails;
import com.wellsfargo.app.helper.AddLoanHelper;
import com.wellsfargo.app.repositories.EmployeeCardDetailsRepo;
import com.wellsfargo.app.repositories.EmployeeIssueDetailsRepo;
import com.wellsfargo.app.repositories.EmployeeMasterRepo;
import com.wellsfargo.app.repositories.ItemMasterRepo;
import com.wellsfargo.app.repositories.LoanCardDetailsRepo;

/**
 * 
 */
@Service
public class AddLoanService {

	@Autowired
	EmployeeCardDetailsRepo cardRepo;
	@Autowired
	EmployeeIssueDetailsRepo issueRepo;
	@Autowired
	LoanCardDetailsRepo loanRepo;
	@Autowired
	ItemMasterRepo itemRepo;
	@Autowired
	EmployeeMasterRepo employeeRepo;
	
	

	public String addLoan(AddLoanHelper loan) {
		// TODO Auto-generated method stub
		//ge values out of input to attribute
//		@Autowired
		EmployeeMaster employee = new EmployeeMaster();
//		@Autowired
		EmployeeCardDetails card = new EmployeeCardDetails();
//		@Autowired
		EmployeeIssueDetails issue = new EmployeeIssueDetails();
//		@Autowired
		LoanCardDetails loanc = new LoanCardDetails();
//		@Autowired
		ItemMaster item= new ItemMaster();
		int employeeId = loan.getEmployeeId();
		String itemCategory = loan.getItemCategory();
		String itemDescription = loan.getItemDescription();
		String itemMake = loan.getItemMake();
		int itemValuation = loan.getItemValue();
		List<ItemMaster> check = itemRepo.findByItemCategoryAndItemDescriptionAndItemMakeAndItemCost
				(itemCategory, 
						itemDescription, 
						itemMake,
						itemValuation);
		int itemId, flag=0; 
		for (int i=0; i<check.size(); i++)
		{
			if(((check.get(i)).getIssueStatus()).equals("No")) {
				itemId = (check.get(i)).getItemId();
				(check.get(i)).setIssueStatus("Yes");
				item = check.get(i);
				flag=1;
				break;
		}
		}
		if(flag==0)
			return "No Item Available";
		//define LoanCardDetails
		loanc.setLoanType(loan.getItemCategory());
		loanc.setDurationInMonths(12);
		//define employeeCardDetails
		card.setLoanCard(loanc);
		if(!employeeRepo.existsById(employeeId))
			return "Employee Invalid";
		else {
			employee = employeeRepo.findById(employeeId).get();
			card.setEmployeeMaster(employee);
		}
		Date current = new Date();
		card.setCardIssueDate(current);
		//employeeIssuedetails
		issue.setIssueDate(current);
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.MONTH, 12);
		issue.setReturnDate(calendar.getTime());
		issue.setItems(item);
		issue.setEmployeeMaster(employee);
		issue.setItems(item);
		
		issueRepo.save(issue);
		cardRepo.save(card);
		loanRepo.save(loanc);
		
		return "Inserted Successfully!";
	}

}

