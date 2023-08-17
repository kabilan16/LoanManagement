package com.wellsfargo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.app.entities.ItemMaster;

public interface ItemMasterRepo extends JpaRepository<ItemMaster, Integer> {

}
