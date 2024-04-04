package com.Group4.FitnessClub.Entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Getter
@Setter
@Table(name = "trainers")
public class Trainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String specialty; // e.g., Yoga, Weightlifting, Pilates

    @Column(length = 500)
    private String bio; // A short biography or description

    // Assuming a trainer can have multiple classes
    @OneToMany(mappedBy = "trainer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<FitnessClass> classes = new HashSet<>();
}
