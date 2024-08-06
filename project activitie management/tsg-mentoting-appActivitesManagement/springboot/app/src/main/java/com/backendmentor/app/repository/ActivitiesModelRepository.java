package com.backendmentor.app.repository;

import java.sql.Timestamp;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backendmentor.app.models.Activities;
import com.backendmentor.app.models.Users;

@Repository
public interface ActivitiesModelRepository extends JpaRepository<Activities, Integer>{

    List<Activities> findByName(String name);
    List<Activities> findByState(String state);
    List<Activities> findByPriority(String priority);
    List<Activities> findByUserAssigned(Users userAssigned);
    List<Activities> findByExpirationDateBetween(Timestamp startDate, Timestamp endDate);
}
