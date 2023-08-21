package com.wellsfargo.app.DTO;

public class EmployeeItemMasterDetailsDTO {
	//Employee Master
	private int employeeId;
	private String designation;
	private String department;
	//Employee issue details
	private int issueId;
	//Item Master
	private String itemDescription;
	private String itemMake;
	private String itemCategory;
	private int itemValuation;
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public int getIssueId() {
		return issueId;
	}
	public void setIssueId(int issueId) {
		this.issueId = issueId;
	}
	public String getItemDescription() {
		return itemDescription;
	}
	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}
	public String getItemMake() {
		return itemMake;
	}
	public void setItemMake(String itemMake) {
		this.itemMake = itemMake;
	}
	public String getItemCategory() {
		return itemCategory;
	}
	public void setItemCategory(String itemCategory) {
		this.itemCategory = itemCategory;
	}
	public int getItemValuation() {
		return itemValuation;
	}
	public void setItemValuation(int i) {
		this.itemValuation = i;
	}
	
	
	
	
}
