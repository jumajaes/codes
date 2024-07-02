package com.backendmentor.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class firstController {
  
    @GetMapping("/start")
    public String getMethodName() {
        return "start";
    }

    @GetMapping("/model") // si se requieren varios paths{"/model",...,...}
    public String getMethodstart(Model model ) {
        model.addAttribute("text", "IT´S APLICATION SPRING");
        model.addAttribute("name","modelName");
        return "model";
    }

}

