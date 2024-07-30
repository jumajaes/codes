package com.backendmentor.app.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.backendmentor.app.exceptions.RestEntity;
import com.backendmentor.app.models.Activities;
import com.backendmentor.app.services.ActivitiesService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/activities")
public class ActivitiesController {

    @Autowired
    private ActivitiesService activitiesService;

    @GetMapping
    public ResponseEntity<RestEntity> getAllActivities() {
        return ResponseEntity.ok(activitiesService.allActivities());
    }

    @PostMapping
    public ResponseEntity<RestEntity> createActivitie(@RequestBody Activities newActivity) {
        try {
            return ResponseEntity.ok(activitiesService.createActivitie(newActivity));
        } catch (Exception error) {
            throw error; 
        }
    }
}