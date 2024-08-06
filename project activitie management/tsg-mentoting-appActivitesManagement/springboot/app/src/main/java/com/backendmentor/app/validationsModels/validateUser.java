package com.backendmentor.app.validationsModels;

import com.backendmentor.app.exceptions.BusinessLogicException;
import com.backendmentor.app.models.Users;

public class validateUser {

    private boolean isUser = false;
    
    public boolean isUser() {
        return isUser;
    }

    public validateUser(Users user) {
        
        if(!(user.getId() instanceof Integer)){
            throw new BusinessLogicException("Id usuario no valido.");
        }

        this.isUser = true;
    }

}
