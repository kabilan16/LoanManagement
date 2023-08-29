package com.wellsfargo.app.controller;

import com.wellsfargo.app.controllers.AddLoanController;
import com.wellsfargo.app.helper.AddLoanHelper;
import com.wellsfargo.app.services.AddLoanService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class AddLoanControllerTest {

    @Mock
    private AddLoanService addLoanService;

    @InjectMocks
    private AddLoanController addLoanController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testAddLoan() {
        AddLoanHelper loanHelper = new AddLoanHelper(21, "furniture", "table", 50, "wood");
        String savedLoan = "Loan added successfully";

        when(addLoanService.addLoan(loanHelper)).thenReturn(savedLoan);

        ResponseEntity<String> responseEntity = addLoanController.addLoan(loanHelper);

        verify(addLoanService).addLoan(loanHelper);

        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(savedLoan, responseEntity.getBody());
    }

    @Test
    void testAddLoan_successful() {
        AddLoanHelper loanHelper = new AddLoanHelper(24, "furniture", "chair", 32, "plastic");
        String savedLoan = "Loan added successfully";

        when(addLoanService.addLoan(loanHelper)).thenReturn(savedLoan);

        ResponseEntity<String> responseEntity = addLoanController.addLoan(loanHelper);

        verify(addLoanService).addLoan(loanHelper);

        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(savedLoan, responseEntity.getBody());
    }
}
