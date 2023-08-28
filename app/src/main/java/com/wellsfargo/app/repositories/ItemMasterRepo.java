package com.wellsfargo.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.wellsfargo.app.entities.ItemMaster;

public interface ItemMasterRepo extends JpaRepository<ItemMaster, Integer> {

	List<ItemMaster> findByItemCategoryAndItemDescriptionAndItemMakeAndItemCost(String itemCategory, String itemDescription,
			String itemMake, int itemValuation);

}
