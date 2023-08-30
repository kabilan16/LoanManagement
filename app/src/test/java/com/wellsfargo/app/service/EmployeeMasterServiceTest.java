package com.wellsfargo.app.service;
import com.wellsfargo.app.entities.EmployeeMaster;
import com.wellsfargo.app.repositories.EmployeeMasterRepo;
import com.wellsfargo.app.services.EmployeeMasterService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class EmployeeMasterServiceTest {

    @InjectMocks
    private EmployeeMasterService employeeMasterService;

    @Mock
    private EmployeeMasterRepo employeeMasterRepo;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindUserDetailsById() {
        // Mock data
        EmployeeMaster mockEmployee = new EmployeeMaster(1,"Sauhard","Program Associate","Tech",new Date(),new Date());
//        mockEmployee.setEmployeeId(1);
//        mockEmployee.setEmployeeName("John Doe");

        // Mock repository response
        when(employeeMasterRepo.findById(1)).thenReturn(Optional.of(mockEmployee));

        // Perform the test
        Optional<EmployeeMaster> result = employeeMasterService.findUserDetailsById(1);

        // Verify the result
        assertEquals(Optional.of(mockEmployee), result);
    }

    @Test
    void testCreateEmployee() {
        // Mock data
        EmployeeMaster mockEmployee = new EmployeeMaster(1,"Sauhard","Program Associate","Tech",new Date(),new Date());
       // mockEmployee.setEmployeeName("Jane Smith");

        // Mock repository response
        when(employeeMasterRepo.save(any(EmployeeMaster.class))).thenReturn(mockEmployee);

        // Perform the test
        EmployeeMaster result = employeeMasterService.createEmployee(mockEmployee);

        // Verify the result
        assertEquals(mockEmployee, result);
    }

    @Test
    void testEditEmployee() {
        // Mock data
        EmployeeMaster mockEmployee = new EmployeeMaster(1,"Sauhard","Program Associate","Tech",new Date(),new Date());
        mockEmployee.setEmployeeId(1);
        mockEmployee.setDesignation("Updated Designation");

        // Mock repository response
        when(employeeMasterRepo.getReferenceById(1)).thenReturn(mockEmployee);
        when(employeeMasterRepo.save(any(EmployeeMaster.class))).thenReturn(mockEmployee);

        // Perform the test
        EmployeeMaster result = employeeMasterService.editEmployee(mockEmployee);

        // Verify the result
        assertEquals(mockEmployee, result);
    }

    @Test
    void testDeleteEmployeebyId() {
        // Mock repository response
        doNothing().when(employeeMasterRepo).deleteById(1);

        // Perform the test
        String result = employeeMasterService.deleteEmployeebyId(1);

        // Verify the result
        assertEquals("Employee deleted successfully", result);
    }

    @Test
    void testFindEmployeeDetails() {
        // Mock data
        List<EmployeeMaster> mockEmployees = new ArrayList<>();
        mockEmployees.add(new EmployeeMaster(1,"Sauhard","Program Associate","Tech",new Date(),new Date()));
        mockEmployees.add(new EmployeeMaster(2,"Goutham","Program Associate","Tech",new Date(),new Date()));

        // Mock repository response
        when(employeeMasterRepo.findAll()).thenReturn(mockEmployees);

        // Perform the test
        List<EmployeeMaster> result = employeeMasterService.findEmployeeDetails();

        // Verify the result
        assertEquals(mockEmployees, result);
    }
}

