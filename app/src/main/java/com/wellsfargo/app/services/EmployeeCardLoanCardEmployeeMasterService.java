package com.wellsfargo.app.services;

import com.wellsfargo.app.DTO.EmployeeCardLoanCardEmployeeMasterDTO;
import com.wellsfargo.app.DTO.EmployeeItemMasterDetailsDTO;
import com.wellsfargo.app.entities.*;
import com.wellsfargo.app.repositories.EmployeeCardDetailsRepo;
import com.wellsfargo.app.repositories.EmployeeIssueDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeCardLoanCardEmployeeMasterService {
    @Autowired
    EmployeeCardDetailsRepo employeeCardDetailsRepo;
    public List<EmployeeCardLoanCardEmployeeMasterDTO> getAllDetails(Integer id) {

          return ((List<EmployeeCardDetails>)employeeCardDetailsRepo
                .findByEmployeeMaster_employeeId(id))
                .stream()
                .map(this::convertDataIntoDTO)
                .collect(Collectors.toList());
    }

    private EmployeeCardLoanCardEmployeeMasterDTO convertDataIntoDTO(EmployeeCardDetails employeeCardDetails) {

        EmployeeCardLoanCardEmployeeMasterDTO dto = new EmployeeCardLoanCardEmployeeMasterDTO();
        dto.setCardIssueDate(employeeCardDetails.getCardIssueDate());

        EmployeeMaster employee = employeeCardDetails.getEmployeeMaster();
        LoanCardDetails loanCardDetails = employeeCardDetails.getLoanCardDetails();

        dto.setDepartment(employee.getDepartment());
        dto.setDesignation(employee.getDesignation());
        dto.setEmployeeId(employee.getEmployeeId());

        dto.setLoanId(loanCardDetails.getLoanId());
        dto.setLoanType(loanCardDetails.getLoanType());
        dto.setDurationInMonths(loanCardDetails.getDurationInMonths());

        return dto;
    }
}
