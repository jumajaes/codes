package com.backendmentor.app.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.backendmentor.app.models.Userstoassign;
import com.backendmentor.app.repository.UsersModelRepository;

@RestController
public class UsersController {

    @Autowired
    private UsersModelRepository userRepository;

    @GetMapping("/allUsers")
    public java.util.List<Userstoassign> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{idUser}")
    public Userstoassign getUserById(@PathVariable Integer idUser) {
        return userRepository.findById(idUser).get();
    }

    @PostMapping("/newUser")
    public String SetNewUser(@RequestBody Userstoassign newUser) {
        userRepository.save(newUser);
        return "newfirst saved";
    }

    @PutMapping("/update/{idUserToUpdate}")
    public String updateUser(@PathVariable Integer idUserToUpdate, @RequestBody Userstoassign userToUpdate) {
        Userstoassign update = userRepository.findById(idUserToUpdate).get();
        update.setName(userToUpdate.getName());
        userRepository.save(update);
        System.out.println(userToUpdate.toString());
        return "User Updated";
    }

    @DeleteMapping("delete/{idUserDelete}")
    public String deletemodel(@PathVariable Integer idUserDelete) {
        Userstoassign delete = userRepository.findById(idUserDelete).get();
        userRepository.delete(delete);
        return "User Deleted";
    }

}
