package com.example.group4.sportsclub.Entity;


import lombok.*;
import jakarta.persistence.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Getter
@Setter
@Table(name = "subscriptions")
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    private String subscriptionType; // E.g., MONTHLY, YEARLY
    private LocalDate startDate;
    private LocalDate endDate;
}
