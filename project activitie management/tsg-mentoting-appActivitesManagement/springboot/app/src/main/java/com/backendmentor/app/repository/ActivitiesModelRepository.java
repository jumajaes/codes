package com.backendmentor.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backendmentor.app.models.Activities;

@Repository
public interface ActivitiesModelRepository extends JpaRepository<Activities, Integer>{}
