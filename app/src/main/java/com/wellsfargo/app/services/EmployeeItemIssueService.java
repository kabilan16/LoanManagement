package com.wellsfargo.app.services;

import java.util.List;
//import java.util.stream.Collectors;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import com.wellsfargo.app.DTO.EmployeeItemMasterDetailsDTO;
import com.wellsfargo.app.entities.EmployeeIssueDetails;
import com.wellsfargo.app.entities.EmployeeMaster;
import com.wellsfargo.app.entities.ItemMaster;
import com.wellsfargo.app.repositories.EmployeeIssueDetailsRepo;

@Service
public class EmployeeItemIssueService {

	@Autowired
	EmployeeIssueDetailsRepo employeeIssueDetailsRepo;
	public List<EmployeeItemMasterDetailsDTO> getAllDetails(Integer id) {

		// TODO Auto-generated method stub
		return ((List<EmployeeIssueDetails>)employeeIssueDetailsRepo
				.findByEmployeeMaster_employeeId(id))
				.stream()
				.map(this::convertDataIntoDTO)
				.collect(Collectors.toList());
	}

	private EmployeeItemMasterDetailsDTO convertDataIntoDTO(EmployeeIssueDetails employeeIssueDetails) {
		
		EmployeeItemMasterDetailsDTO dto = new EmployeeItemMasterDetailsDTO();
		dto.setIssueId(employeeIssueDetails.getIssueId());
		
		EmployeeMaster employee = employeeIssueDetails.getEmployeeMaster();
		ItemMaster item = employeeIssueDetails.getItems();
		
		dto.setDepartment(employee.getDepartment());
		dto.setDesignation(employee.getDesignation());
		dto.setEmployeeId(employee.getEmployeeId());
		
		dto.setItemCategory(item.getItemCategory());
		dto.setItemDescription(item.getItemDescription());
		dto.setItemMake(item.getItemMake());
		dto.setItemValuation(item.getItemCost());
		return dto;
	}

}
