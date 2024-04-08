package com.example.group4.sportsclub.Controller;


import com.example.group4.sportsclub.Entity.Yoga;
import com.example.group4.sportsclub.Service.YogaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Description:
 * Author: weizhenzhang
 * Date: 2024-04-04
 * Project: integration_project
 */
@RestController
@RequestMapping("/api/yoga")
public class YogaController {

    @Autowired
    private YogaService yogaService;

    @GetMapping
    public List<Yoga> getAllYogaClasses() {
        return yogaService.getAllYogaClasses();
    }

    @PostMapping
    public Yoga createYogaClass(@RequestBody Yoga yoga) {
        return yogaService.createYogaClass(yoga);
    }

    @DeleteMapping("/{id}")
    public void deleteYogaClass(@PathVariable Long id) {
        yogaService.deleteYogaClass(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Yoga> getYogaClassById(@PathVariable Long id) {
        Optional<Yoga> optionalYoga = yogaService.getYogaClassById(id);
        return optionalYoga.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Yoga> updateYogaClass(@PathVariable Long id, @RequestBody Yoga updatedYoga) {
        Yoga yoga = yogaService.updateYogaClass(id, updatedYoga);
        return yoga != null ? ResponseEntity.ok(yoga) : ResponseEntity.notFound().build();
    }


}

