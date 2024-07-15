package com.backendmentor.app.models;

import java.sql.Timestamp;

import org.springframework.stereotype.Component;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

/**
 * model
 */
@Entity
@Table //(schema = "userstoassign") ---- no lo especifico por que en aplication propertis ya estoy hubicando el esquema /activitiemanagement o bd spring.datasource.url=jdbc:mysql://localhost:3307/activitiemanagement?useSSL=false
@Component
public class Activities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(unique = true, nullable = false)
    private String name;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    private String priority;

    @Column(nullable = false)
    private Timestamp expirationDate;

    @Column(nullable = false, columnDefinition = "TEXT")
    @Lob
    private String description; 

    @Column(nullable = false)
    private String assignedto;


    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public Timestamp getExpirationdate() {
        return expirationDate;
    }

    public void setExpirationdate(Timestamp expirationdate) {
        this.expirationDate = expirationdate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAssignedto() {
        return assignedto;
    }

    public void setAssignedto(String assignedto) {
        this.assignedto = assignedto;
    }

    //--------------------------------
       
}