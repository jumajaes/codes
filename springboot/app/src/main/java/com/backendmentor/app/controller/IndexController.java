package com.backendmentor.app.controller;

import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.backendmentor.app.models.Firtsmodel;





@Controller
@RequestMapping("/app")
public class IndexController {
    
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

    
    @RequestMapping("/model")
    public String getMethodModel(Model model) {
        Firtsmodel fmodel = new Firtsmodel("juan");
        model.addAttribute("fmodel", fmodel);
        return "model";
    }
    
}
