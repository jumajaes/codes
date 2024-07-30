package com.backendmentor.app.services;

import java.sql.Timestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import com.backendmentor.app.exceptions.BadRequestException;
import com.backendmentor.app.exceptions.RestEntity;
import com.backendmentor.app.models.Activities;
import com.backendmentor.app.repository.ActivitiesModelRepository;

@Service
public class ActivitiesService {

    @Autowired
    private ActivitiesModelRepository activitiesRepository;

    public RestEntity allActivities() {
        try {
            final int httpCodeRequest = HttpStatus.OK.value();
            System.out.println(httpCodeRequest);
            return new RestEntity(
                    httpCodeRequest,
                    HttpStatus.OK,
                    activitiesRepository.findAll(),
                    "Tarea guardada correctamente.",
                    new Timestamp(System.currentTimeMillis()));
        } catch (Exception error) {
            throw new BadRequestException(" Error desconocido, al consultar las tareas.");
        }
    };

    public RestEntity createActivitie(Activities newActivitie) {
        try {
            if (newActivitie.getPriority().trim().length() == 0) {
                throw new BadRequestException("La prioridad no puede estar vacía.");
            }
            if (newActivitie.getState().equals("")) {
                throw new BadRequestException("El estado no puede estar vacío.");
            }
            if (newActivitie.getName().trim().length() == 0) {
                throw new BadRequestException("El nombre no puede estar vacío.");
            }
            if (newActivitie.getDescription().trim().length() == 0) {
                throw new BadRequestException("La descripción no puede estar vacía.");
            }
            if (newActivitie.getId() != 0) {
                throw new BadRequestException("El ID debe ser 0 para crear una nueva tarea.");
            }

            Timestamp expirationDate = newActivitie.getExpirationDate();
            if (expirationDate != null) {
                newActivitie.setExpirationDate(expirationDate);
            } else {
                throw new BadRequestException("La fecha de expiración es erronea.");
            }

            newActivitie.setState("active");
            try {
                activitiesRepository.save(newActivitie);
            } catch (DataIntegrityViolationException e) {
                throw new BadRequestException("Nombre ya existe.");
            }

            return new RestEntity(
                    HttpStatus.OK.value(),
                    HttpStatus.OK,
                    newActivitie,
                    "Tarea guardada correctamente.",
                    new Timestamp(System.currentTimeMillis()));

        } catch (BadRequestException e) {
            throw e;
        } catch (RuntimeException e) {
            throw new RuntimeException("Ocurrió un error desconocido.", e);
        }
    }

}
