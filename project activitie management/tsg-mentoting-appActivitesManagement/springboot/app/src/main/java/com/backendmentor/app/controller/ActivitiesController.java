package com.backendmentor.app.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.backendmentor.app.controller.dto.ActivitieDTO;
import com.backendmentor.app.models.Activities;
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
}