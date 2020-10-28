package com.todos.restapi.restcontrollers;

import com.todos.restapi.bean.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuthenticationController {
    @GetMapping("basicAuth")
    public AuthenticationBean authentication(){
        return new AuthenticationBean("You are authenticated");
    }

    @GetMapping("hello-world/path-variable/{name}")
    public String helloPathVariable(@PathVariable String name){
        return new String("Hello Word " + name);
    }
}
