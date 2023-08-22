package com.wellsfargo.app.helper;

public class AddLoanHelper {
	int employeeId;
	String itemCategory;
	String itemDescription;
	int itemValue;
	String itemMake;
	public AddLoanHelper() {
		
	}
	public AddLoanHelper(int employeeId, String itemCategory, String itemDescription, int itemValue,
			String itemMake) {
		
		this.employeeId = employeeId;
		this.itemCategory = itemCategory;
		this.itemDescription = itemDescription;
		this.itemValue = itemValue;
		this.itemMake = itemMake;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getItemCategory() {
		return itemCategory;
	}
	public void setItemCategory(String itemCategory) {
		this.itemCategory = itemCategory;
	}
	public String getItemDescription() {
		return itemDescription;
	}
	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}
	public int getItemValue() {
		return itemValue;
	}
	public void setItemValue(int itemValue) {
		this.itemValue = itemValue;
	}
	public String getItemMake() {
		return itemMake;
	}
	public void setItemMake(String itemMake) {
		this.itemMake = itemMake;
	}
	
	
	
}
