package com.wellsfargo.app.config;

import com.wellsfargo.app.filter.JwtFilter;
import com.wellsfargo.app.services.AdminDetailsService;
import com.wellsfargo.app.services.UsersDetailsService;
import com.wellsfargo.app.utility.JWTUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    private UsersDetailsService usersDetailsService;
    @Autowired
    private AdminDetailsService adminDetailsService;
    @Autowired
    private JwtFilter jwtFilter;

    @Autowired
    private JWTUtility jwtUtility;
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(usersDetailsService)
                .and()
                .userDetailsService(adminDetailsService);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
////        http.csrf()
////                .disable()
////                .authorizeRequests()
////                .antMatchers("/authenticate")
////                .permitAll()
////                .anyRequest()
////                .authenticated()
////                .and()
////                .sessionManagement()
////                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
////        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//
//        http
//                .cors().and()
//                .csrf().disable()
//                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
//
//                .authorizeRequests()
//                //.antMatchers("/hellouser").hasAnyRole("USER","ADMIN")
//                .antMatchers("AdminLogin/authenticate","/UserLogin/authenticate"
//                        //        ,"/transaction/**","/beneficiary/**","/account/**"
//                )
//                .permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//        //.and().httpBasic()
//        ;
//    }



    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors().and()
                .csrf().disable()
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                .antMatchers("/UserLogin/authenticate").permitAll() // User login endpoint
                .antMatchers("/AdminLogin/authenticate").permitAll()
                .anyRequest().authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
}
