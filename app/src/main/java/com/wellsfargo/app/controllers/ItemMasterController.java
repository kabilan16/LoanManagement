package com.wellsfargo.app.controllers;

//import com.wellsfargo.app.entities.LoanCardDetails;
import com.wellsfargo.app.services.ItemMasterService;
//import com.wellsfargo.app.services.LoanCardDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wellsfargo.app.entities.EmployeeMaster;
import com.wellsfargo.app.entities.ItemMaster;

@RestController
@CrossOrigin("http://localhost:3000")
public class ItemMasterController {
    @Autowired
    private ItemMasterService itemMasterService;
    @GetMapping("/getItemDetails/{id}")
    public ResponseEntity<ItemMaster> getItemById(Integer id){
    	return ResponseEntity.ok(itemMasterService.findItemDetailsById(id).get());
    }
    @PostMapping("/addItems")
    public ResponseEntity<ItemMaster> createItem(@RequestBody ItemMaster item ){
		ItemMaster savedItem = itemMasterService.createItem(item);
		return new ResponseEntity<>(savedItem, HttpStatus.CREATED);
    }
    

}
