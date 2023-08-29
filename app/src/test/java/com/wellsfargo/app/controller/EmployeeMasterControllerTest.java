package com.wellsfargo.app.controller;

import com.wellsfargo.app.controllers.EmployeeMasterController;
import com.wellsfargo.app.entities.EmployeeMaster;
import com.wellsfargo.app.services.EmployeeMasterService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class EmployeeMasterControllerTest {

    @InjectMocks
    private EmployeeMasterController employeeMasterController;

    @Mock
    private EmployeeMasterService employeeMasterService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetUserById() {
        // Mock data
        EmployeeMaster mockEmployee = new EmployeeMaster(1,"Sauhard","Program Associate","Tech",new Date(),new Date());


        // Mock service response
        when(employeeMasterService.findUserDetailsById(1)).thenReturn(Optional.of(mockEmployee));

        // Perform the test
        ResponseEntity<EmployeeMaster> response = employeeMasterController.getUserById(1);

        // Verify the response
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockEmployee, response.getBody());
    }

    @Test
    void testCreateEmployee() {
        // Mock data
        EmployeeMaster mockEmployee = new EmployeeMaster(1,"Sauhard","Program Associate","Tech",new Date(),new Date());


        // Mock service response
        when(employeeMasterService.createEmployee(any(EmployeeMaster.class))).thenReturn(mockEmployee);

        // Perform the test
        ResponseEntity<EmployeeMaster> response = employeeMasterController.createEmployee(mockEmployee);

        // Verify the response
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(mockEmployee, response.getBody());
    }

    @Test
    void testEditEmployee() {
        // Mock data
        EmployeeMaster mockEmployee = new EmployeeMaster(1,"Sauhard","Program Associate","Tech",new Date(),new Date());
        mockEmployee.setEmployeeId(1);
        mockEmployee.setEmployeeName("Updated Name");

        // Mock service response
        when(employeeMasterService.editEmployee(any(EmployeeMaster.class))).thenReturn(mockEmployee);

        // Perform the test
        ResponseEntity<EmployeeMaster> response = employeeMasterController.editEmployee(mockEmployee);

        // Verify the response
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(mockEmployee, response.getBody());
    }

    @Test
    void testDeleteEmployee() {
        // Mock service response
        when(employeeMasterService.deleteEmployeebyId(1)).thenReturn("Deleted");

        // Perform the test
        ResponseEntity<String> response = employeeMasterController.deleteEmployee(1);

        // Verify the response
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Deleted", response.getBody());
    }

    @Test
    void testGetAllEmployee() {
        // Mock data
        List<EmployeeMaster> mockEmployees = new ArrayList<>();
        mockEmployees.add(new EmployeeMaster(1,"Sauhard","Program Associate","Tech",new Date(),new Date()));
        mockEmployees.add(new EmployeeMaster(2,"Goutham","Program Associate","Tech",new Date(),new Date()));

        // Mock service response
        when(employeeMasterService.findEmployeeDetails()).thenReturn(mockEmployees);

        // Perform the test
        ResponseEntity<List<EmployeeMaster>> response = employeeMasterController.getAllEmployee();

        // Verify the response
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockEmployees, response.getBody());
    }
}