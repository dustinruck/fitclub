package com.example.group4.sportsclub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


@SpringBootApplication
public class SportsClubApplication {

    public static void main(String[] args) {
        SpringApplication.run(SportsClubApplication.class, args);
    }

//     @Bean
// public CorsFilter corsFilter() {
//     UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//     CorsConfiguration config = new CorsConfiguration();
//     config.addAllowedOrigin("*");
//     config.addAllowedHeader("*");
//     config.addAllowedMethod("*");
//     source.registerCorsConfiguration("/**", config);
//     return new CorsFilter(source);
// }

}
