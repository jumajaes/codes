package com.backendmentor.app.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
            return activitiesRepository.save(newActivitie);
        } catch (Throwable error) {
            System.out.println(error.getMessage().split("\\]")[0] + "  %%%%%");
            throw new BusinessLogicException("");
        }
    }
    
}
