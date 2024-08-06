package com.backendmentor.app.controller;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.backendmentor.app.controller.dto.ActivitieDTO;
import com.backendmentor.app.models.Activities;
import com.backendmentor.app.models.Users;
import com.backendmentor.app.services.ActivitiesService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/activities")
public class ActivitiesController {

    @Autowired
    private ActivitiesService activitiesService;

    @GetMapping
    public ResponseEntity<List<Activities>> allActivities() {
        return ResponseEntity.ok(activitiesService.allActivities());
    }

    @PostMapping
    public ResponseEntity<Activities> createActivitie(@Valid @RequestBody ActivitieDTO newActivity) {
        return ResponseEntity.ok(this.activitiesService.createActivitie(newActivity));
    }

    @GetMapping("/name/{name}")
    public List<Activities> getByName(@PathVariable String name) {
        return activitiesService.findByName(name);
    }

    @GetMapping("/state/{state}")
    public List<Activities> getByState(@PathVariable String state) {
        return activitiesService.findByState(state);
    }

    @GetMapping("/priority/{priority}")
    public List<Activities> getByPriority(@PathVariable String priority) {
        return activitiesService.findByPriority(priority);
    }

    @GetMapping("/user/{userId}")
    public List<Activities> getByUserAssigned(@PathVariable Integer userId) {
        Users user = new Users();
        user.setId(userId);
        return activitiesService.findByUserAssigned(user);
    }

    @GetMapping("/date-range")
    public List<Activities> getByDateRange(@RequestParam Timestamp startDate, @RequestParam Timestamp endDate) {
        return activitiesService.findByExpirationDateBetween(startDate, endDate);
    }
}