package com.backendmentor.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backendmentor.app.exceptions.BusinessLogicException;
import com.backendmentor.app.models.Users;
import com.backendmentor.app.repository.UsersModelRepository;

@Service
public class UsersService {

    @Autowired
    private UsersModelRepository usersRepository;

    public List<Users> allUsers() {
        try {
            return usersRepository.findAll();
        } catch (Exception e) {
            throw new BusinessLogicException(String.format("Error al consultar usuarios, %s", e.getMessage()));
        }

    }

}
