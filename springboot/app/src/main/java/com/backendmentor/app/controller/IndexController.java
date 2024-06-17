package com.backendmentor.app.controller;

// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.backendmentor.app.models.Firtsmodel;
import com.backendmentor.app.repository.FirtsmodelRepository;
import org.springframework.web.bind.annotation.PostMapping;




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

    @GetMapping("/first")
    public java.util.List<Firtsmodel> firstEndpoint() {

        return repository.findAll();
    }
    

    @PostMapping("/newfirst")
    public String newfirst(@RequestBody Firtsmodel fmodel) {

        repository.save(fmodel);

        return "newfirst saved";
    }
    
}
