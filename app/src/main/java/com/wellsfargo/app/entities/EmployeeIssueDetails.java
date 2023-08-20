package com.wellsfargo.app.entities;


import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "EmployeeIssueDetails")
public class EmployeeIssueDetails {
	@Id
	@NotNull
	@Column(name = "issue_id")
	private int issueID;
	
	//@JsonBackReference
	@ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH })
	@JoinColumn(name = "employee_id")
	private EmployeeMaster employeeMaster;
	
	//@JsonBackReference
	@ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH })
	@JoinColumn(name = "item_id")
	private ItemMaster items;

	@NotNull
	@Column(name = "issue_date")
	private Date issueDate;
	@NotNull
	@Column(name = "return_date")
	private Date returnDate;
	
	public EmployeeIssueDetails() {
		
	}

	public EmployeeIssueDetails(int issueID, Date issueDate, Date returnDate) {
		this.issueID = issueID;
		this.issueDate = issueDate;
		this.returnDate = returnDate;
	}
	public int getIssueId(){
		
		return issueID;
	}
	public void setIssueId(int issueId){
		
		this.issueID=issueId;
	}
	public Date getIssueDate(){
		
		return issueDate;
	}
	public void setIssueDate(Date issueDate){
		
		this.issueDate=issueDate;
	}
	public Date getReturnDate()
	{
		return returnDate;
	}
	public void setReturnDate(Date returnDate) {
		this.returnDate = returnDate;
	}

}
