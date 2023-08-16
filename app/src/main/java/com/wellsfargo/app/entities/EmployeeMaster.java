package com.wellsfargo.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.Date;






@Entity
@Table(name="EmployeeMaster")
public class EmployeeMaster {
	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "employee_id")
	private int employeeId;
	@NotNull
	@Column(name="employee_name")
	private String employeeName;
	@NotNull
	@Column(name="designation")
	private String designation;
	@NotNull
	@Column(name="department")
	private String department;
	@NotNull
	@Column(name = "date_of_birth")
	private Date dateOfBirth;
	@NotNull
	@Column(name = "date_of_joining")
	private Date dateOfJoining;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "employeeMaster", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE,
			CascadeType.DETACH, CascadeType.REFRESH })
	private List<EmployeeIssueDetails> issue;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "employeeMaster", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE,
			CascadeType.DETACH, CascadeType.REFRESH })
	private List<EmployeeCardDetails> loanCard;
	
	@OneToOne(mappedBy="employee", cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private UserDetails user;
	
	public EmployeeMaster(){
		
	}

	public EmployeeMaster(int employeeId, String employeeName, String designation, String department, Date dateOfBirth, Date dateOfJoining) {
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.designation = designation;
		this.department = department;
		this.dateOfBirth = dateOfBirth;
		this.dateOfJoining = dateOfJoining;
	}
	public int getEmployeeId(){
		
		return employeeId;
	}
	public void setEmployeeId(int employeeId){
		
		this.employeeId=employeeId;
	}
	
	public String getEmployeeName(){
		
		return employeeName;
	}
	public void getEmployeeName(String employeeName){
		
		this.employeeName=employeeName;
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
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public Date getDateOfJoining() {
		return dateOfJoining;
	}

	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}


}
