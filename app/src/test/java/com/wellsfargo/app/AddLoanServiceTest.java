package com.wellsfargo.app;

import static org.mockito.Mockito.*;

import com.wellsfargo.app.entities.*;
import com.wellsfargo.app.helper.AddLoanHelper;
import com.wellsfargo.app.repositories.*;
import com.wellsfargo.app.services.AddLoanService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.*;

@SpringBootTest
public class AddLoanServiceTest {

    @Autowired
    private AddLoanService addLoanService;

    @MockBean
    private EmployeeCardDetailsRepo cardRepo;

    @MockBean
    private EmployeeIssueDetailsRepo issueRepo;

    @MockBean
    private LoanCardDetailsRepo loanRepo;

    @MockBean
    private ItemMasterRepo itemRepo;

    @MockBean
    private EmployeeMasterRepo employeeRepo;

    @BeforeEach
    public void setUp() {
        // Set up any necessary mocks or stubs before each test
    }

    @Test
    public void testAddLoanSuccess() {
        // Set up mock responses for the repositories
        EmployeeMaster employee = new EmployeeMaster();
        employee.setEmployeeId(2121); // Set the appropriate ID

        when(employeeRepo.existsById(1)).thenReturn(true);
        when(employeeRepo.findById(1)).thenReturn(Optional.of(employee));

        ItemMaster item = new ItemMaster();
        item.setItemId(1); // Set the appropriate ID
        when(itemRepo.findByItemCategoryAndItemDescriptionAndItemMakeAndItemCost(
                anyString(), anyString(), anyString(), anyInt())).thenReturn(Collections.singletonList(item));

        // Create a sample AddLoanHelper object
        AddLoanHelper loan = new AddLoanHelper();
        // Set necessary attributes

        // Call the service method
        String result = addLoanService.addLoan(loan);

        // Assert the result
        // You can use assertions to verify if the result matches your expectations
        // For example: assertEquals("Inserted Successfully!", result);

        // Verify that the necessary methods were called
        verify(employeeRepo).existsById(1);
        verify(employeeRepo).findById(1);
        verify(itemRepo).findByItemCategoryAndItemDescriptionAndItemMakeAndItemCost(
                anyString(), anyString(), anyString(), anyInt());
        verify(issueRepo).save(any(EmployeeIssueDetails.class));
        verify(cardRepo).save(any(EmployeeCardDetails.class));
        verify(loanRepo).save(any(LoanCardDetails.class));
    }

    // You can add more test methods for different scenarios

}
