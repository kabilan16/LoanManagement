package com.wellsfargo.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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
	
	
	public AdminDetails (String password, String isAdmin) {
		this.password = password;
		this.isAdmin = isAdmin;
	}


	public int getAdminId() {
		return adminId;
	}


	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getIsAdmin() {
		return isAdmin;
	}


	public void setIsAdmin(String isAdmin) {
		this.isAdmin = isAdmin;
	}
	
}
