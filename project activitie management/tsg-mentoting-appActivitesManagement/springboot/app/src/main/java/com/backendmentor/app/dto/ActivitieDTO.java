package com.backendmentor.app.dto;
import java.sql.Timestamp;

import org.springframework.stereotype.Component;

import com.backendmentor.app.models.Userstoassign;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class ActivitieDTO {

    private Integer id;
    
    private String name;

    private String state;


    private String priority;


    private Timestamp expiration_date;


    private Timestamp createdDate;


    private String description; 


    private Userstoassign idToAssigned;


    public Userstoassign getIdToAssigned() {
        return idToAssigned;
    }

    public void setIdToAssigned(Userstoassign idToAssigned) {
        this.idToAssigned = idToAssigned;
    }

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

    public Timestamp  getExpiration_date() {
        return expiration_date;
    }

    public void setExpiration_date(Timestamp  expirationdate) {
        this.expiration_date = expirationdate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

}