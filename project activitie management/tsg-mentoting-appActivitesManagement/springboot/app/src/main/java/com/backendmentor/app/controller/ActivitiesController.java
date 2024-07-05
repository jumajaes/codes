package com.backendmentor.app.controller;

import org.springframework.web.bind.annotation.RestController;

import javax.print.attribute.standard.DateTimeAtCreation;

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

@CrossOrigin(origins="*")
@RestController
public class ActivitiesController {
    
    @Autowired
    private ActivitiesModelRepository  activitiesRepository;

    @GetMapping("/allActivities")
    public java.util.List<Activities> getAllActivities() {
        return activitiesRepository.findAll();
    }

    @GetMapping("/activitieById/{id}")
    public Activities getActivitieById(@PathVariable Integer id) {
        return activitiesRepository.findById(id).get();
    }

    @PostMapping("/newActivitie")
    public String SetNewUser(@RequestBody Activities newActivite) {
        
        System.out.println(newActivite.getState());
        System.out.println(newActivite.getExpirationdate());
        System.out.println(newActivite.getName());
        System.out.println(newActivite.getDescription());
        System.out.println(newActivite.getPriority());
        System.out.println(newActivite.getAssignedto());
        
        System.out.println(new DateTimeAtCreation(newActivite.getExpirationdate()));
        return "newfirst saved";
    }

    @PutMapping("/updateActivitie/{id}")
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
