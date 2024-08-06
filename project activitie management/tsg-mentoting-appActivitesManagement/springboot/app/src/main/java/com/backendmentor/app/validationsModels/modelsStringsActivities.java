package com.backendmentor.app.validationsModels;

import com.backendmentor.app.exceptions.BusinessLogicException;

public class modelsStringsActivities {

    public String getStrName(String name) {

        if (!name.trim().equals("") & !name.equals(null)) {
           return name;
        } else {
            throw new BusinessLogicException("Nombre no valido");
        }

    }

    public String getStrState(String state) {

        if (state.equals("activa")|state.equals("completa")|state.equals("vencida")|state.equals("cancelada")) {
           return state;
        } else {
            throw new BusinessLogicException("Estado no valido.");
        }

    }

    public String getStrPriority(String priority) {

        if (priority.equals("alta")|priority.equals("media")|priority.equals("baja")) {
           return priority;
        } else {
            throw new BusinessLogicException("Prioridad no valida.");
        }

    }

    public String getStrDescription(String description) {

        if (!description.trim().equals("") & !description.equals(null)) {
           return description;
        } else {
            throw new BusinessLogicException("La descripcion no puede estar vacia.");
        }

    }
}
