package com.backendmentor.app.models;

import java.sql.Timestamp;

import org.springframework.stereotype.Component;

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

@Entity
@Table(indexes = {@Index(name = "name",  columnList="name")}) //( ---- no lo especifico por que en aplication propertis ya estoy hubicando el esquema /activitiemanagement o bd spring.datasource.url=jdbc:mysql://localhost:3307/activitiemanagement?useSSL=false
@Component
public class Activities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @NotBlank(message = "Entrada nula o vacia no permitida.")
    @Column(unique = true)
    private String name;

    @Pattern(regexp = "^(activa|completa|cancelada|expirada)$", message = "Estado no valido.")
    @NotBlank(message = "Entrada nula o vacia no permitida.")
    @Column
    private String state;

    @Pattern(regexp = "^(media|alta|baja)$")
    @NotBlank(message = "Entrada nula o vacia no permitida.")
    @Column
    private String priority;

    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private Timestamp expirationDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    @Column(nullable = false)
    private Timestamp createdDate;

    @NotBlank(message = "Entrada nula o vacia no permitida.")
    @Column(columnDefinition = "TEXT")
    @Lob
    private String description; 

    @ManyToOne
    @JoinColumn(name = "idToAssigned", referencedColumnName = "id")
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

    public Timestamp  getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Timestamp  expirationdate) {
        this.expirationDate = expirationdate;
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