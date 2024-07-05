package com.backendmentor.app.models;

import java.sql.Timestamp;

import org.springframework.stereotype.Component;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Integer assignedto;


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
        return expirationdate;
    }

    public void setExpirationdate(Timestamp expirationdate) {
        this.expirationdate = expirationdate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getAssignedto() {
        return assignedto;
    }

    public void setAssignedto(Integer assignedto) {
        this.assignedto = assignedto;
    }

    //--------------------------------
       
}