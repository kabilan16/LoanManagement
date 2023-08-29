package com.wellsfargo.app.service;

import com.wellsfargo.app.entities.ItemMaster;
import com.wellsfargo.app.repositories.ItemMasterRepo;
import com.wellsfargo.app.services.ItemMasterService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ItemMasterServiceTest {

    @InjectMocks
    private ItemMasterService itemMasterService;

    @Mock
    private ItemMasterRepo itemMasterRepo;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindItemDetailsById() {
        // Mock data
        ItemMaster mockItem = new ItemMaster(1,"Desk","Cast Iron","Furniture","No",5000);
        mockItem.setItemId(1);
        mockItem.setItemDescription("Sample Item");

        // Mock repository response
        when(itemMasterRepo.findById(1)).thenReturn(Optional.of(mockItem));

        // Perform the test
        Optional<ItemMaster> result = itemMasterService.findItemDetailsById(1);

        // Verify the result
        assertEquals(Optional.of(mockItem), result);
    }

    @Test
    void testCreateItem() {
        // Mock data
        ItemMaster mockItem = new ItemMaster(1,"Desk","Cast Iron","Furniture","No",5000);
        mockItem.setItemDescription("New Item");

        // Mock repository response
        when(itemMasterRepo.save(any(ItemMaster.class))).thenReturn(mockItem);

        // Perform the test
        ItemMaster result = itemMasterService.createItem(mockItem);

        // Verify the result
        assertEquals(mockItem, result);
    }

    @Test
    void testUpdateItemDetails() {
        // Mock data
        ItemMaster mockItem = new ItemMaster(1,"Desk","Cast Iron","Furniture","No",5000);
        mockItem.setItemId(1);
        mockItem.setIssueStatus("Updated Status");
        mockItem.setItemCost(100);

        // Mock repository response
        when(itemMasterRepo.getReferenceById(1)).thenReturn(mockItem);
        when(itemMasterRepo.save(any(ItemMaster.class))).thenReturn(mockItem);

        // Perform the test
        ItemMaster result = itemMasterService.updateItemDetails(mockItem);

        // Verify the result
        assertEquals(mockItem, result);
    }

    @Test
    void testDeleteDetailsById() {
        // Mock repository response
        doNothing().when(itemMasterRepo).deleteById(1);

        // Perform the test
        String result = itemMasterService.deleteDetailsById(1);

        // Verify the result
        assertEquals("Deleted Successfully!", result);
    }

    @Test
    void testFindItemDetails() {
        // Mock data
        List<ItemMaster> mockItems = new ArrayList<>();
        mockItems.add(new ItemMaster(1,"Desk","Cast Iron","Furniture","No",5000));
        mockItems.add(new ItemMaster(2,"Desk","Cast Iron","Furniture","No",5000));

        // Mock repository response
        when(itemMasterRepo.findAll()).thenReturn(mockItems);

        // Perform the test
        List<ItemMaster> result = itemMasterService.findItemDetails();

        // Verify the result
        assertEquals(mockItems, result);
    }
}
