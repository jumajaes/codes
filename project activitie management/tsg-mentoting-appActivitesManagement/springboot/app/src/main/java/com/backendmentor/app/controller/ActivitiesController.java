package com.backendmentor.app.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.backendmentor.app.models.Activities;
import com.backendmentor.app.services.ActivitiesService;

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
    public void createActivitie(@Valid @RequestBody Activities newActivity) {
        ResponseEntity.ok(activitiesService.createActivitie(newActivity));
    }
}