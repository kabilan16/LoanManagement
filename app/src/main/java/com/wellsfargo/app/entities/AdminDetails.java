package com.wellsfargo.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class AdminDetails {
	@Id
	@Column(name="admin_id")
	int adminId;
	@Column(name="password")
	String password;
	@Column(name="is_admin")
	String isAdmin;

	@OneToOne
	@MapsId
	@JoinColumn(name="employee_id")
	private EmployeeMaster employee;
	public AdminDetails() {

	}
	public AdminDetails (String password, String isAdmin) {
		this.password = password;
		this.isAdmin = isAdmin;
	}
	public int getEmployeeId() {
		return adminId;
	}

	public String getPassword() {
		return password;
	}
	public String getIsAdmin() {
		return isAdmin;
	}
	public EmployeeMaster getEmployee() {
		return employee;
	}

}
