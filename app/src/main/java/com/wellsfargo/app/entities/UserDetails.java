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
public class UserDetails {
	@Id
	@Column(name="employee_id")
	int employeeId;
	@Column(name="password")
	String password;
	@Column(name="is_admin")
	String isAdmin;
	
	@OneToOne
	@MapsId
	@JoinColumn(name="employee_id")
	private EmployeeMaster employee;
	
	public UserDetails (String password, String isAdmin) {
		this.password = password;
		this.isAdmin = isAdmin;
	}
	
}
