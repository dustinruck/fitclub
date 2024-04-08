package com.example.group4.sportsclub.Controller;

import com.example.group4.sportsclub.Entity.SportClass;
import com.example.group4.sportsclub.Service.SportClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Description:
 * Author: weizhenzhang
 * Date: 2024-04-05
 * Project: sportsClub
 */
@RestController
@RequestMapping("/sport-classes")
public class SportClassController {

    @Autowired
    private SportClassService sportClassService;

    @GetMapping
    public List<SportClass> getAllSportClasses() {
        return sportClassService.getAllSportClasses();
    }

    @PostMapping
    public SportClass createSportClass(@RequestBody SportClass sportClass) {
        return sportClassService.createSportClass(sportClass);
    }

    @DeleteMapping("/{id}")
    public void deleteSportClass(@PathVariable Long id) {
        sportClassService.deleteSportClass(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SportClass> getSportClassById(@PathVariable Long id) {
        Optional<SportClass> optionalSportClass = sportClassService.getSportClassById(id);
        return optionalSportClass.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<SportClass> updateSportClass(@PathVariable Long id, @RequestBody SportClass updatedSportClass) {
        SportClass sportClass = sportClassService.updateSportClass(id, updatedSportClass);
        return sportClass != null ? ResponseEntity.ok(sportClass) : ResponseEntity.notFound().build();
    }
}