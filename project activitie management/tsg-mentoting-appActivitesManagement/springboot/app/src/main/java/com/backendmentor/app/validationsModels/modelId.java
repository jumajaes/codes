package com.backendmentor.app.validationsModels;

import com.backendmentor.app.exceptions.BusinessLogicException;

public class modelId {
    
    private Integer id;

    public Integer getId() {
        return id;
    }

    public modelId(Integer id) {

        if(id instanceof Integer){
            this.id = id;
        }else{
            throw new BusinessLogicException("Id debe ser un numero entero.");
        }
    }
    
    
    
}
