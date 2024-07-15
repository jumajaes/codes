package com.backendmentor.app.models;

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
public class Userstoassign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    //--------------------------------

   
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}