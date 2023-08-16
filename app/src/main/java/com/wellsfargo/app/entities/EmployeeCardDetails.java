package com.wellsfargo.app.entities;

//import java.util.ArrayList;
import java.util.Date;
//import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.FetchType;

import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="EmployeeCardDetails")
public class EmployeeCardDetails {
	@Id
	@NotNull
	@Column(name="loan_id")
	private int loanId;
	@NotNull
	@Column(name = "employee_id")
	private int employeeId;

	
	@NotNull
	@Column(name="card_issue_date")
	private Date cardIssueDate;
	

	@JsonBackReference
	@ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH })
	@JoinColumn(name = "employee_id")
	private EmployeeMaster employeeMaster;
	
	@OneToOne
	@MapsId
	@JoinColumn(name="loan_id")
	private LoanCardDetails loanCard;

	public EmployeeCardDetails(int employeeId,  Date cardIssueDate) {
		this.employeeId = employeeId;
		//this.loanId = loanId;
		this.cardIssueDate = cardIssueDate;
	}
	public int getEmployeeId(){
		
		return employeeId;
	}
	public void setEmployeeId(int employeeId){
		
		this.employeeId=employeeId;
	}
	//public int getLoanId()
//	{
//		return loanId;
//	}
//	public void setLoanId(int  loanId)
//	{
//		this.loanId = loanId;
//	}
	public Date getCardIssueDate() { 
		return cardIssueDate;
	}
	public void setCardIssueDate(Date cardIssueDate) {
		this.cardIssueDate = cardIssueDate;
	}
}
