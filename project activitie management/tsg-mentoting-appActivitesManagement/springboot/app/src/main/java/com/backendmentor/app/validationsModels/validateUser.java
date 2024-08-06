package com.backendmentor.app.validationsModels;

import com.backendmentor.app.exceptions.BusinessLogicException;
import com.backendmentor.app.models.Users;

public class validateUser {

    private boolean isUser = false;
    
    public boolean isUser() {
        return isUser;
    }

    public validateUser(Users user) {
        
        if(user == null){
            throw new BusinessLogicException("El usuario a asignar no puede ser nulo.");
        }
        if(!(user.getId() instanceof Integer)){
            throw new BusinessLogicException("El id del usuario a asignar debe ser un entero positivo.");
        }
        this.isUser = true;
    }

}
