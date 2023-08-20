package com.wellsfargo.app.entities;

//import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
//import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
//import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonManagedReference;

//import org.hibernate.annotations.GenericGenerator;

//import com.fasterxml.jackson.annotation.JsonBackReference;


//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


@Entity
@Table ( name = "ItemMaster" )
public class ItemMaster {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	//@GeneratedValue(generator = "item_id")
	//@GenericGenerator(name = "item_id", strategy = "org,hibernate.id.UUIDGenerator")
	@Column(name="item_id" )
	int itemId;
	@NotNull
	@Column(name="item_description")
	String itemDescription  ;
	@NotNull
	@Column(name="item_make")
	String itemMake  ;
	@NotNull
	@Column(name="item_category")
	String itemCategory  ;
	@NotNull
	@Column(name="issue_status")
	String issueStatus ;
	@NotNull
	@Column(name="item_cost")
	int itemCost  ;
	//@JsonManagedReference
	@OneToOne(mappedBy="items", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE,
			CascadeType.DETACH, CascadeType.REFRESH })
	private EmployeeIssueDetails issueDetails;
	
	public ItemMaster() {
		
	}
	public ItemMaster(int itemId, String itemDescription, String itemMake, String itemCategory, String issueStatus, int itemCost) {
		this.itemId = itemId;
		this.itemDescription = itemDescription;
		this.itemMake = itemMake;
		this.itemCategory = itemCategory;
		this.issueStatus = issueStatus;
		this.itemCost = itemCost;
	}
	public int getItemId () {
		return itemId ;
	}
	public void setItemId(int itemId) {
	
		this.itemId = itemId;

	}
	public String getItemDescription () {
		return itemDescription ;
	}
	public void setItemDescription(String itemDescription) {
	
		this.itemDescription = itemDescription;
	}
	public String getItemMake () {
		return itemMake ;
	}
	public void setItemMake(String itemMake) {
	
		this.itemMake = itemMake;

	}
	public String getItemCategory () {
		return itemCategory ;
	}
	public void setItemCategory(String itemCategory) {
	
		this.itemCategory = itemCategory;

	}
	public String getIssueStatus() {
		return issueStatus;
	}
	public void setIssueStatus(String issueStatus) {
		this.issueStatus=issueStatus;
	}
	public int getItemCost () {
		return itemCost ;
	}
	public void setItemCost(int itemCost) {
	
		this.itemCost = itemCost;

	}



	}
	

