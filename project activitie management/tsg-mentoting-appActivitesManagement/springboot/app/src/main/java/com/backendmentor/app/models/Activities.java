package com.backendmentor.app.models;

import java.sql.Timestamp;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table // ( ---- no lo especifico por que en aplication propertis ya estoy hubicando el
       // esquema /activitiemanagement o bd
       // spring.datasource.url=jdbc:mysql://localhost:3307/activitiemanagement?useSSL=false
@Component
public class Activities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    private String name;

    private String state;

    private String priority;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private Timestamp expiration_date;

    private Timestamp createdDate;

    @Column(columnDefinition = "TEXT")
    @Lob
    private String description;

    @ManyToOne
    @JoinColumn(name = "idUser")
    private Users userAssigned;

    public Users getUserAssigned() {
        return userAssigned;
    }

    public void setUserAssigned(Users userAssigned) {
        this.userAssigned = userAssigned;
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

    public Timestamp getExpiration_date() {
        return expiration_date;
    }

    public void setExpiration_date(Timestamp expirationdate) {
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