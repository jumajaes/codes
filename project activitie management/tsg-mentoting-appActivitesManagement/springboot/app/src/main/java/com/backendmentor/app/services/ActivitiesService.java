package com.backendmentor.app.services;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backendmentor.app.controller.dto.ActivitieDTO;
import com.backendmentor.app.models.Activities;
import com.backendmentor.app.models.Users;
import com.backendmentor.app.repository.ActivitiesModelRepository;
import com.backendmentor.app.repository.UsersModelRepository;
import com.backendmentor.app.validationsModels.modelDate;
import com.backendmentor.app.validationsModels.modelId;
import com.backendmentor.app.validationsModels.modelsStringsActivities;
import com.backendmentor.app.validationsModels.validateUser;

@Service
public class ActivitiesService {

    @Autowired
    private ActivitiesModelRepository activitiesRepository;

    @Autowired
    private UsersModelRepository usersRepository;

    public List<Activities> allActivities() {
        return activitiesRepository.findAll();
    };

    public Activities activitie(Integer idActivitie) {
        return activitiesRepository.findById(idActivitie).get();
    };


    public Activities createActivitie(ActivitieDTO newActivitie) {
        System.out.println(newActivitie.getClass().toString());
        modelsStringsActivities validatorStr = new modelsStringsActivities();
       
        Users user = newActivitie.getUserAssigned();
        if(new validateUser(user).isUser()){
            user =  usersRepository.findById(newActivitie.getUserAssigned().getId()).get();
        }
        new modelId(newActivitie.getId());
        Activities activitie = new Activities();
        activitie.setName(validatorStr.getStrName(newActivitie.getName()));
        activitie.setState(validatorStr.getStrState(newActivitie.getState()));
        activitie.setPriority(validatorStr.getStrPriority(newActivitie.getPriority()));
        activitie.setDescription(validatorStr.getStrDescription(newActivitie.getDescription()));
        activitie.setCreatedDate(new Timestamp(System.currentTimeMillis()));
        activitie.setExpiration_date(new modelDate().getExpirationDate(newActivitie.getExpiration_date()));
        activitie.setUserAssigned(user);
        return activitiesRepository.save(activitie);
        
    }

    public List<Activities> findByName(String name) {
        return activitiesRepository.findByName(name);
    }

    public List<Activities> findByState(String state) {
        return activitiesRepository.findByState(state);
    }

    public List<Activities> findByPriority(String priority) {
        return activitiesRepository.findByPriority(priority);
    }

    public List<Activities> findByUserAssigned(Integer userId) {
        return activitiesRepository.findByUserAssigned(userId);
    }

    // public List<Activities> findByExpirationDateBetween(Timestamp startDate, Timestamp endDate) {
    //     return activitiesRepository.findByExpirationDateBetween(startDate, endDate);
    // }
}
