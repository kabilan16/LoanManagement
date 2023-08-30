package com.wellsfargo.app.controllers;

//import com.wellsfargo.app.entities.LoanCardDetails;
import com.wellsfargo.app.services.ItemMasterService;

import java.util.List;

//import com.wellsfargo.app.services.LoanCardDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wellsfargo.app.entities.EmployeeMaster;
import com.wellsfargo.app.entities.ItemMaster;
import com.wellsfargo.app.entities.LoanCardDetails;

@RestController
@CrossOrigin("http://localhost:3000")
public class ItemMasterController {
    @Autowired
    private ItemMasterService itemMasterService;
    @GetMapping("/getItemDetails/{id}")
    public ResponseEntity<ItemMaster> getItemById(@PathVariable Integer id){
    	return ResponseEntity.ok(itemMasterService.findItemDetailsById(id).get());
    }
    @PostMapping("/addItems")
    public ResponseEntity<ItemMaster> createItem(@RequestBody ItemMaster item ){
		ItemMaster savedItem = itemMasterService.createItem(item);
		return new ResponseEntity<>(savedItem, HttpStatus.CREATED);
    }
    
    @PutMapping("/updateItem")
    public ResponseEntity<ItemMaster> updateItemDetails(@RequestBody ItemMaster item)
    {
    	ItemMaster updatedItem = itemMasterService.updateItemDetails(item);
    	return new ResponseEntity<>(updatedItem, HttpStatus.CREATED);
    }
    @DeleteMapping("/deleteItemDetails/{id}")
    public ResponseEntity<String> deleteDetailsById(@PathVariable Integer id)
    { 
    	return ResponseEntity.ok(itemMasterService.deleteDetailsById(id));
    }
    @GetMapping("/getAllItem")
	public ResponseEntity<List<ItemMaster>> getAllEmployee(){
		return ResponseEntity.ok(itemMasterService.findItemDetails());
	}
    

}
