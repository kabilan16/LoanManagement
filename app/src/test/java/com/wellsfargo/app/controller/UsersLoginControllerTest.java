package com.wellsfargo.app.controller;

import com.wellsfargo.app.controllers.UsersLoginController;
import com.wellsfargo.app.entities.JWTRequest;
import com.wellsfargo.app.entities.JWTResponse;
import com.wellsfargo.app.helper.LoginHelper;
import com.wellsfargo.app.services.UsersDetailsService;
import com.wellsfargo.app.utility.JWTUtility;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UsersLoginControllerTest {

    @Mock
    private JWTUtility jwtUtility;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private UsersDetailsService usersDetailsService;

    @InjectMocks
    private UsersLoginController usersLoginController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testAuthenticate() throws Exception {
        String username = "69";
        String password = "Sanch";
        String token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OSIsImlhdCI6MTY5MzIwNzYxOSwiZXhwIjoxNjkzMjI1NjE5fQ.p35z7x_qeKwZZY9dExJQjxWAIc4JUhnEVxScZNAov15mRBNKvT_3rV3f49lVCQKa0UhsEoSp9bteCW8FVr8DRg";

        JWTRequest jwtRequest = new JWTRequest(username, password);
        UserDetails userDetails = mock(UserDetails.class);

        when(usersDetailsService.validateUser(any())).thenReturn("credentials are correct");
        when(usersDetailsService.loadUserByUsername(username)).thenReturn(userDetails);
        when(jwtUtility.generateToken(userDetails)).thenReturn(token);

        JWTResponse jwtResponse = usersLoginController.authenticate(jwtRequest);

        verify(authenticationManager).authenticate(any());
        verify(usersDetailsService).loadUserByUsername(username);
        verify(jwtUtility).generateToken(userDetails);

        assertEquals(token, jwtResponse.getJwtToken());
    }

    @Test
    void testValidateUserDetails() {
        LoginHelper loginHelper = new LoginHelper(123, "testPassword");
        String expectedResult = "credentials are correct";

        when(usersDetailsService.validateUser(loginHelper)).thenReturn(expectedResult);

        ResponseEntity<String> responseEntity = usersLoginController.validateUserDetails(loginHelper);

        verify(usersDetailsService).validateUser(loginHelper);

        assertEquals(expectedResult, responseEntity.getBody());
        assertEquals(200, responseEntity.getStatusCodeValue());
    }

    // Add more test cases for different scenarios and edge cases
}
