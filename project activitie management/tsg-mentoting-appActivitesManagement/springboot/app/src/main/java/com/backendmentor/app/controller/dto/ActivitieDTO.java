package com.backendmentor.app.controller.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.backendmentor.app.models.Users;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActivitieDTO {

    private Integer id;
    
    @NotBlank(message = "El nombre no puede ser nulo, ni vacio.")
    private String name;
    
    @NotBlank(message = "El estado no puede ser nulo.")
    private String state;

    @NotBlank(message = "La prioridad no puede ser nula.")
    private String priority;

    @NotBlank(message = "La fecha de expedicion es obligatoria.")
    private String expiration_date;

    @NotBlank(message = "La descripcion no puede estar vacia.")
    private String description; 

    @NotNull(message = "Usuario es nulo.")
    private Users userAssigned;

    
    public Users getUserAssigned() {
        return userAssigned;
    }

    public void setUserAssigned(Users UserAssigned) {
        this.userAssigned = UserAssigned;
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

    public String  getExpiration_date() {
        return expiration_date;
    }

    public void setExpiration_date(String  expirationdate) {
        this.expiration_date = expirationdate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}