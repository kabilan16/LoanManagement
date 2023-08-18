package com.wellsfargo.app.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wellsfargo.app.repositories.ItemMasterRepo;
import com.wellsfargo.app.entities.ItemMaster;




@Service
public class ItemMasterService {
	private ItemMasterRepo itemMasterRepo;
	public Optional<ItemMaster> findItemDetailsById(Integer id) {
		// TODO Auto-generated method stub
		return itemMasterRepo.findById(id);
	}
	public ItemMaster createItem(ItemMaster item) {
		// TODO Auto-generated method stub
		return itemMasterRepo.save(item);

	}
}
