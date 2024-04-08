package com.example.group4.sportsclub.Service;


import com.example.group4.sportsclub.Entity.Yoga;
import com.example.group4.sportsclub.Repository.YogaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Description:
 * Author: weizhenzhang
 * Date: 2024-04-04
 * Project: integration_project
 */
@Service
public class YogaService {

    @Autowired
    private YogaRepository yogaRepository;

    public List<Yoga> getAllYogaClasses() {
        return yogaRepository.findAll();
    }

    public Yoga createYogaClass(Yoga yoga) {
        return yogaRepository.save(yoga);
    }

    public void deleteYogaClass(Long id) {
        yogaRepository.deleteById(id);
    }

    public Optional<Yoga> getYogaClassById(Long id) {
        return yogaRepository.findById(id);
    }

    public Yoga updateYogaClass(Long id, Yoga updatedYoga) {
        Optional<Yoga> optionalYoga = yogaRepository.findById(id);
        if (optionalYoga.isPresent()) {
            Yoga yoga = optionalYoga.get();
            yoga.setName(updatedYoga.getName());
            yoga.setDescription(updatedYoga.getDescription());
            yoga.setStartTime(updatedYoga.getStartTime());
            yoga.setEndTime(updatedYoga.getEndTime());
            yoga.setTrainer(updatedYoga.getTrainer());
            return yogaRepository.save(yoga);
        } else {
            // Handle case when yoga class with given id is not found
            return null;
        }
    }
}


