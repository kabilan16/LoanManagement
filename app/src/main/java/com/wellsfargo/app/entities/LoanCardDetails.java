package com.wellsfargo.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="LoanCardDetails")
public class LoanCardDetails {
	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="loan_id")
	private int loanId;
	@NotNull
	@Column(name="loan_type")
	private String loanType;
	@NotNull
	@Column(name="duration_in_months")
	private int durationInMonths;
	@OneToOne(mappedBy="loanCard", cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private EmployeeCardDetails employeeCard;
	public LoanCardDetails()
	{
		
	}
	public LoanCardDetails(int loanId, String loanType, int durationInMonths)
	{
		this.loanId = loanId;
		this.loanType = loanType;
		this.durationInMonths = durationInMonths;
	}
	public int getLoanId()
	{
		return loanId;
	}
	public void setLoanId(int  loanId)
	{
		this.loanId = loanId;
	}
	public String getLoanType () {
		return loanType;
	}
	public void setLoanType (String  loanType) {
		this.loanType = loanType;
	}
	public int getDurationInMonths () {
		return durationInMonths;
	}
	public void setDurationInMonths (int durationInMonths) {
		this.durationInMonths = durationInMonths;
	}
}
