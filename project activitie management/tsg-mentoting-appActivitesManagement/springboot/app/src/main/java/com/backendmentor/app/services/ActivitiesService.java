package com.backendmentor.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.backendmentor.app.exceptions.BadRequestException;
import com.backendmentor.app.models.Activities;
import com.backendmentor.app.repository.ActivitiesModelRepository;

@Service
public class ActivitiesService {

    @Autowired
    private ActivitiesModelRepository activitiesRepository;

    public java.util.List<Activities> getActivities() {
        try {
            activitiesRepository = null;
            return activitiesRepository.findAll();
        } catch (Exception error) {
            // @todo: Implementar escritura log de errores.
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se pudo guardar la tarea, nombre ya existe.");
        }

    };

    public void createActivitie(Activities newActivitie) {
        if (newActivitie.getState() == "" | newActivitie.getState() == null) {
            newActivitie.setState("active");
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"No se pudo guardar la tarea, nombre ya existe.");
        }
        activitiesRepository.save(newActivitie);

    }

}
