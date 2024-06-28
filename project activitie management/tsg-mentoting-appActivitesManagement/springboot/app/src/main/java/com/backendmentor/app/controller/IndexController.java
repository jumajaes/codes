package com.backendmentor.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;


import com.backendmentor.app.models.Userstoassign;
import com.backendmentor.app.repository.FirtsmodelRepository;

//import org.springframework.web.bind.annotation.PutMapping;




// @Controller
// @RequestMapping("/app")
@RestController
public class IndexController {

    @Autowired
    private FirtsmodelRepository repository;
    
    // @RequestMapping(value = {"/start","/","/home"}, method=RequestMethod.GET)
    // public String start(@RequestParam String param) {
    //     return "start";
    // }

    // @GetMapping({"start", "/", "/home"})
    // public String getMethodName() {
    //     return "start";
    // }

    // @GetMapping({"start", "/","", "/home"})
    // public String getMethodstart(Model model) {
    //     model.addAttribute("welcome", "IT´S APLICATION SPRING");
    //     return "start";
    // }

    
    // @RequestMapping("/model")
    // public String getMethodModel(Model model) {
    //     Firtsmodel fmodel = new Firtsmodel("juan");
    //     model.addAttribute("fmodel", fmodel);
    //     return "model";
    // }

    @RequestMapping("/")
    public String Hi() {
        return "hola";
    }

    @GetMapping("/users")
    public java.util.List<Userstoassign> getUsers() {

        return repository.findAll();
    }

    // @GetMapping("/{idUser}/userTasks")
    // public java.util.List<userstoassign> getfirst(@PathVariable Integer idUser) {

    //     return repository.findAll();
    // }

    // @GetMapping("/first/{id}")
    // public Firtsmodel getOnefirst(@PathVariable long id) {
    //     Firtsmodel fmodel = repository.findById(id).get();
    //     return fmodel;
    // }
    

    // @PostMapping("/newfirst")
    // public String newfirst(@RequestBody Firtsmodel fmodel) {

    //     repository.save(fmodel);

    //     return "newfirst saved";
    // }

    //  @PutMapping(value="/update/{id}")
    // public String updatemodel(@PathVariable long id, @RequestBody Firtsmodel fmodel){
    //     Firtsmodel updatefmodel = repository.findById(id).get();
    //     updatefmodel.setName(fmodel.getName());
    //     repository.save(updatefmodel);
    //     return "Updated Task";
    // }

    // @DeleteMapping(value="delete/{id}")
    // public String deletemodel(@PathVariable long id){
    //     Firtsmodel deletedfmodel = repository.findById(id).get();
    //     repository.delete(deletedfmodel);
    //     return "Deleted Task";
    // }
    
}
