package com.backendmentor.app.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.backendmentor.app.models.Users;
import com.backendmentor.app.services.UsersService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UsersService usersService;

    @GetMapping
    public ResponseEntity<List<Users>> allActivities() {
        return ResponseEntity.ok(usersService.allUsers());
    }

}