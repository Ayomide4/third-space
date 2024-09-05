package com.ayomide.third_space.web;

import com.ayomide.third_space.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {


    private List<User> db = List.of(new User(1,"ayo", "omotosho", "aomotosho4@gmail.com", "cool"));


    @GetMapping("/user")
    public List<User> get(){
        return db;
    }

}
