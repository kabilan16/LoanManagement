package com.wellsfargo.app.controllers;

import com.wellsfargo.app.entities.ItemMaster;
import com.wellsfargo.app.services.ItemMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ItemMasterController {
    @Autowired
    private ItemMasterService itemMasterService;

    @PostMapping("/getDistinctMakesByCategory")
    @ResponseBody
    public List<String> getDistinctMakesByCategory(@RequestBody ItemMaster itemMaster){
        return itemMasterService.getDistinctMakesByCategory(itemMaster.getItemCategory());
    }

    @GetMapping("/getAllCategory")
    public List<String> getAllCategory(){
        return itemMasterService.getAllCategory();
    }

    @PostMapping("/getItem")
    public ItemMaster getItemByMakeAndCategory (@RequestBody ItemMaster itemMaster){
        return itemMasterService.getItemByMakeAndCategory(itemMaster.getItemCategory(),itemMaster.getItemMake());
    }

}
