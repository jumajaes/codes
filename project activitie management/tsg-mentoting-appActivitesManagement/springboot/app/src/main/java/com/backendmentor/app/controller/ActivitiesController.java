package com.backendmentor.app.controller;

import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.backendmentor.app.models.Activities;
import com.backendmentor.app.repository.ActivitiesModelRepository;
import com.backendmentor.app.services.ActivitiesService;

@CrossOrigin(origins = "*")
@RestController("")
public class ActivitiesController {

    @Autowired
    private ActivitiesModelRepository activitiesRepository;

    @Autowired
    private ActivitiesService activitieService;

    @GetMapping("/activities")
    public ResponseEntity<java.util.List<Activities>> getAllActivities() {
        return ResponseEntity.ok(activitieService.getActivities());
    }

    @GetMapping("/activities/{id}")
    public Activities getActivitieById(@PathVariable Integer id) {
        return activitiesRepository.findById(id).get();
    }

    @PostMapping("/activities")
    public void createActivitie(@RequestBody Activities newActivite) {
        try {
            activitieService.createActivitie(newActivite);
        } catch (Exception error) {
            throw error;
        }
    }

    @PutMapping("/updateStateActivitie/{id}")
    public boolean updateStateActivitie(@PathVariable Integer id, @RequestBody String updateState) {
        Optional<Activities> updateOp = activitiesRepository.findById(id);
        if (updateOp.isPresent()) {
            try {
                Activities update = updateOp.get();
                update.setState(updateState);
                activitiesRepository.save(update);
                return true;
            } catch (Exception e) {
                System.out.println("Ocurrió un error al actualizar la actividad: " + e.getMessage());
                return false;
            }
        } else {
            System.out.println("No se encontró la actividad con id " + id + ".");
            return false;
        }
    }

    @PutMapping("/updateActivitie/{id}")
    public boolean updateActivite(@PathVariable Integer id, @RequestBody Activities upActivite) {
        Optional<Activities> updateOp = activitiesRepository.findById(id);
        if (updateOp.isPresent()) {
            try {
                Activities update = updateOp.get();
                update.setName(upActivite.getName());
                update.setExpirationdate(upActivite.getExpirationdate());
                update.setAssignedto(upActivite.getAssignedto());
                update.setPriority(upActivite.getPriority());
                update.setDescription(upActivite.getDescription());
                activitiesRepository.save(update);
                return true;
            } catch (Exception e) {
                System.out.println("Ocurrió un error al actualizar la actividad: " + e.getMessage());
                return false;
            }
        } else {
            System.out.println("No se encontró la actividad con id " + id + ".");
            return false;
        }
    }

    @DeleteMapping("/deleteActivitie/{id}")
    public String deletemodel(@PathVariable Integer id) {
        Activities delete = activitiesRepository.findById(id).get();
        activitiesRepository.delete(delete);
        return "User Deleted";
    }

}
