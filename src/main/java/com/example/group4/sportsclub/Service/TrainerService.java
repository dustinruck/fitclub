package com.example.group4.sportsclub.Service;

import com.example.group4.sportsclub.Entity.Trainer;
import com.example.group4.sportsclub.Repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Description:
 * Author: weizhenzhang
 * Date: 2024-04-05
 * Project: sportsClub
 */
@Service
public class TrainerService {

    @Autowired
    private TrainerRepository trainerRepository;

    // Create operation
    public Trainer createTrainer(Trainer trainer) {
        return trainerRepository.save(trainer);
    }

    // Read operation
    public List<Trainer> getAllTrainers() {
        return trainerRepository.findAll();
    }

    public Optional<Trainer> getTrainerById(Long id) {
        return trainerRepository.findById(id);
    }

    // Update operation
    public Trainer updateTrainer(Long id, Trainer updatedTrainer) {
        Optional<Trainer> optionalTrainer = trainerRepository.findById(id);
        if (optionalTrainer.isPresent()) {
            Trainer existingTrainer = optionalTrainer.get();
            existingTrainer.setName(updatedTrainer.getName());
            existingTrainer.setSpecialty(updatedTrainer.getSpecialty());
            existingTrainer.setBio(updatedTrainer.getBio());
            return trainerRepository.save(existingTrainer);
        } else {
            return null;
        }
    }

    // Delete operation
    public void deleteTrainer(Long id) {
        trainerRepository.deleteById(id);
    }
}