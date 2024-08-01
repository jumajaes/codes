package com.backendmentor.app.services;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import com.backendmentor.app.exceptions.BusinessLogicException;
import com.backendmentor.app.models.Activities;
import com.backendmentor.app.repository.ActivitiesModelRepository;

@Service
public class ActivitiesService {

    @Autowired
    private ActivitiesModelRepository activitiesRepository;

    public List<Activities> allActivities() {
        return activitiesRepository.findAll();
    };

    public Activities createActivitie(Activities newActivitie) {

        // try {
        //     return activitiesRepository.save(newActivitie);
        // } catch (DataIntegrityViolationException e) {
        //     throw new BusinessLogicException("Nombre ya existe.");
        // }
        return activitiesRepository.save(newActivitie);
        // } catch (RuntimeException e) {
        // throw new RuntimeException("Ocurrio un error desconocido.");
        // }

    }

}
