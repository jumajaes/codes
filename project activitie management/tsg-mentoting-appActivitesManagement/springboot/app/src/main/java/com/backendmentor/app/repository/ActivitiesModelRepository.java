package com.backendmentor.app.repository;

// import java.sql.Timestamp;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.backendmentor.app.models.Activities;
// import com.backendmentor.app.models.Users;

@Repository
public interface ActivitiesModelRepository extends JpaRepository<Activities, Integer>{

    @Query(value = "SELECT * FROM activities WHERE name = ?1", nativeQuery = true)
    List<Activities> findByName(String name);

    @Query(value = "SELECT * FROM activities WHERE state = ?1", nativeQuery = true)
    List<Activities> findByState(String state);
    
    @Query(value = "SELECT * FROM activities WHERE priority = ?1", nativeQuery = true)
    List<Activities> findByPriority(String priority);

    @Query(value = "SELECT * FROM activities WHERE id_user = ?1", nativeQuery = true)
    List<Activities> findByUserAssigned(Integer userId);
    // List<Activities> findByExpirationDateBetween(Timestamp startDate, Timestamp endDate);
}
