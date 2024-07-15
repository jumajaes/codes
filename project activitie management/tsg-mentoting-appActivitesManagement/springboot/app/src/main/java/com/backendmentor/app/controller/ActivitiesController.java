package com.backendmentor.app.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.backendmentor.app.models.Activities;

import com.backendmentor.app.repository.ActivitiesModelRepository;

@CrossOrigin(origins = "*")
@RestController
public class ActivitiesController {

    @Autowired
    private ActivitiesModelRepository activitiesRepository;

    @GetMapping("/allActivities")
    public java.util.List<Activities> getAllActivities() {
        try {
            return activitiesRepository.findAll();
        } catch (Exception e) {
            java.util.List<Activities> error = new ArrayList<>();
            return error;
        }
    }

    @GetMapping("/activitieById/{id}")
    public Activities getActivitieById(@PathVariable Integer id) {
        return activitiesRepository.findById(id).get();
    }

    @PostMapping("/newActivitie")
    public boolean SetNewUser(@RequestBody Activities newActivite) {
        try {
            System.out.println(newActivite.getExpirationdate());            
            activitiesRepository.save(newActivite);
            return true;
        } catch (Exception e) {
            System.out.println(newActivite.getExpirationdate());
            return false;    
        }
    }

    @PutMapping("/updateActivitie/{id} ")
    public String updateUser(@PathVariable Integer id, @RequestBody Activities activitieToUpdate) {
        Activities update = activitiesRepository.findById(id).get();
        update.setName(activitieToUpdate.getName());
        activitiesRepository.save(update);
        return "User Updated";
    }

    @DeleteMapping("/deleteActivitie/{id}")
    public String deletemodel(@PathVariable Integer id) {
        Activities delete = activitiesRepository.findById(id).get();
        activitiesRepository.delete(delete);
        return "User Deleted";
    }

}
