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
        
        try {
            if (newActivitie.getPriority().trim().length() == 0) {
                throw new BusinessLogicException("La prioridad no puede estar vacía.");
            }
            if (newActivitie.getState().equals("")) {
                throw new BusinessLogicException("El estado no puede estar vacío.");
            }
            if (newActivitie.getName().trim().length() == 0) {
                throw new BusinessLogicException("El nombre no puede estar vacío.");
            }
            if (newActivitie.getDescription().trim().length() == 0) {
                throw new BusinessLogicException("La descripción no puede estar vacía.");
            }
            if (newActivitie.getId() != 0) {
                throw new BusinessLogicException("El ID debe ser 0 para crear una nueva tarea.");
            }

            Timestamp expirationDate = newActivitie.getExpirationDate();
            if (expirationDate != null) {
                newActivitie.setExpirationDate(expirationDate);
            } else {
                throw new BusinessLogicException("La fecha de expiración es erronea.");
            }

            newActivitie.setState("active");
            try {
                return activitiesRepository.save(newActivitie);
            } catch (DataIntegrityViolationException e) {
                throw new BusinessLogicException("Nombre ya existe.");
            }


        } catch (BusinessLogicException error) {
            throw error;
        } catch (RuntimeException e) {
            throw new RuntimeException("Ocurrió un error desconocido.");
        }
    }

}
