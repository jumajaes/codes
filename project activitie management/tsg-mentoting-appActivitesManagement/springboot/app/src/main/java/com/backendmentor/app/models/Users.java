package com.backendmentor.app.models;

import java.util.List;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

/**
 * model
 */
@Entity
@Table //(schema = "userstoassign") ---- no lo especifico por que en aplication propertis ya estoy hubicando el esquema /activitiemanagement o bd spring.datasource.url=jdbc:mysql://localhost:3307/activitiemanagement?useSSL=false
@Component
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUser;

    @Column
    private String name;

    @OneToMany(targetEntity = Activities.class, fetch = FetchType.LAZY, mappedBy = "userAssigned")
    @JsonIgnore
    private List<Activities> activitiesList;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return idUser;
    }

    public void setId(Integer idUser) {
        this.idUser = idUser;
    }
}