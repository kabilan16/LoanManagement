package com.wellsfargo.app.controller;

import com.wellsfargo.app.controllers.ItemMasterController;
import com.wellsfargo.app.entities.ItemMaster;
import com.wellsfargo.app.services.ItemMasterService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ItemMasterControllerTest {

    @InjectMocks
    private ItemMasterController itemMasterController;

    @Mock
    private ItemMasterService itemMasterService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetItemById() {
        // Mock data
          ItemMaster mockItem = new ItemMaster(1,"Desk","Cast Iron","Furniture","No",5000);
//        mockItem.setItemId(1);
//        mockItem.setItemName("Sample Item");

        // Mock service response
        when(itemMasterService.findItemDetailsById(1)).thenReturn(Optional.of(mockItem));

        // Perform the test
        ResponseEntity<ItemMaster> response = itemMasterController.getItemById(1);

        // Verify the result
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockItem, response.getBody());
    }

    @Test
    void testCreateItem() {
        // Mock data
        ItemMaster mockItem = new ItemMaster(1,"Desk","Cast Iron","Furniture","No",5000);
//        mockItem.setName("New Item");

        // Mock service response
        when(itemMasterService.createItem(any(ItemMaster.class))).thenReturn(mockItem);

        // Perform the test
        ResponseEntity<ItemMaster> response = itemMasterController.createItem(mockItem);

        // Verify the result
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(mockItem, response.getBody());
    }

    @Test
    void testUpdateItemDetails() {
        // Mock data
        ItemMaster mockItem = new ItemMaster(1,"Desk","Cast Iron","Furniture","No",5000);
        mockItem.setItemCost(3000);
        mockItem.setItemDescription("Updated Item");

        // Mock service response
        when(itemMasterService.updateItemDetails(any(ItemMaster.class))).thenReturn(mockItem);

        // Perform the test
        ResponseEntity<ItemMaster> response = itemMasterController.updateItemDetails(mockItem);

        // Verify the result
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(mockItem, response.getBody());
    }

    @Test
    void testDeleteDetailsById() {
        // Mock service response
        when(itemMasterService.deleteDetailsById(1)).thenReturn("Item deleted successfully");

        // Perform the test
        ResponseEntity<String> response = itemMasterController.deleteDetailsById(1);

        // Verify the result
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Item deleted successfully", response.getBody());
    }

    @Test
    void testGetAllItem() {
        // Mock data
        List<ItemMaster> mockItems = new ArrayList<>();
        mockItems.add(new ItemMaster(1,"Desk","Cast Iron","Furniture","No",5000));
        mockItems.add(new ItemMaster(2,"Desk","Cast Iron","Furniture","No",5000));

        // Mock service response
        when(itemMasterService.findItemDetails()).thenReturn(mockItems);

        // Perform the test
        ResponseEntity<List<ItemMaster>> response = itemMasterController.getAllEmployee();

        // Verify the result
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockItems, response.getBody());
    }
}

