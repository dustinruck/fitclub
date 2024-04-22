package com.example.group4.sportsclub;

import com.example.group4.sportsclub.auth.AuthenticationService;
import com.example.group4.sportsclub.auth.RegisterRequest;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import static com.example.group4.sportsclub.user.Role.ADMIN;
import static com.example.group4.sportsclub.user.Role.MANAGER;

// import org.springframework.context.annotation.Bean;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
// import org.springframework.web.filter.CorsFilter;


@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")

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

    @Bean
    public CommandLineRunner commandLineRunner(
            AuthenticationService service
    ) {
        return args -> {
            var admin = RegisterRequest.builder()
                    .firstname("Admin")
                    .lastname("Admin")
                    .email("admin@mail.com")
                    .password("password")
                    .role(ADMIN)
                    .build();
            System.out.println("Admin token: " + service.register(admin).getAccessToken());

            var manager = RegisterRequest.builder()
                    .firstname("Admin")
                    .lastname("Admin")
                    .email("manager@mail.com")
                    .password("password")
                    .role(MANAGER)
                    .build();
            System.out.println("Manager token: " + service.register(manager).getAccessToken());

        };
    }

}
