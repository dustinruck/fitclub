package com.example.group4.sportsclub.Service;

import com.example.group4.sportsclub.Entity.SportClass;
import com.example.group4.sportsclub.Repository.SportClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.util.StringUtils;
import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

/**
 * Description:
 * Author: weizhenzhang
 * Date: 2024-04-05
 * Project: sportsClub
 */
@Service
public class SportClassService {

    @Autowired
    private SportClassRepository sportClassRepository;

    public SportClassService(SportClassRepository sportClassRepository) {
        this.sportClassRepository = sportClassRepository;
    }

    // private SportClass translateWebToDb(SportClass sportClass) {
    //     SportClass entity = new SportClass();
    //     }

    public List<SportClass> getAllSportClasses() {
        return sportClassRepository.findAll();
    }

    public SportClass createSportClass(SportClass sportClass) {
        return sportClassRepository.save(sportClass);
    }

    public void deleteSportClass(Long id) {
        sportClassRepository.deleteById(id);
    }

    public Optional<SportClass> getSportClassById(Long id) {
        return sportClassRepository.findById(id);
    }

    public SportClass updateSportClass(Long id, SportClass updatedSportClass) {
        SportClass sportClass = sportClassRepository.findById(id).orElse(null);
        if (sportClass != null) {
            // Update properties of sportClass with properties from updatedSportClass
            sportClass.setDescription(updatedSportClass.getDescription());
            sportClass.setName(updatedSportClass.getName());
            sportClass.setStartTime(updatedSportClass.getStartTime());
            sportClass.setEndTime(updatedSportClass.getEndTime());
            sportClass.setTrainer(updatedSportClass.getTrainer());
            return sportClassRepository.save(sportClass);
        }
        return null;
    }
}

