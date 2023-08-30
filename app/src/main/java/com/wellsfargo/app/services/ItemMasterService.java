package com.wellsfargo.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.app.repositories.ItemMasterRepo;
import com.wellsfargo.app.entities.ItemMaster;
import com.wellsfargo.app.entities.LoanCardDetails;




@Service
public class ItemMasterService {
	@Autowired
	private ItemMasterRepo itemMasterRepo;
	public Optional<ItemMaster> findItemDetailsById(Integer id) {
		// TODO Auto-generated method stub
		return itemMasterRepo.findById(id);
	}
	public ItemMaster createItem(ItemMaster item) {
		// TODO Auto-generated method stub
		return itemMasterRepo.save(item);

	}
	public ItemMaster updateItemDetails(ItemMaster item) {
		// TODO Auto-generated method stub
		ItemMaster details = itemMasterRepo.getReferenceById(item.getItemId());
		details.setIssueStatus(item.getIssueStatus());
		
		details.setItemCost(item.getItemCost());
		
		return itemMasterRepo.save(details);
	}
	public String deleteDetailsById(Integer id) {
		// TODO Auto-generated method stub
		itemMasterRepo.deleteById(id);
		return "Deleted Successfully!";
	}
	public List<ItemMaster> findItemDetails() {
		// TODO Auto-generated method stub
		return itemMasterRepo.findAll();
	}
}
