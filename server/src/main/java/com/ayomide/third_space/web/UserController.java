package com.ayomide.third_space.web;

import com.ayomide.third_space.model.User;
import com.ayomide.third_space.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/")
    public String hello(){
        return userService.hello();
    }

    @GetMapping("/user")
    public Iterable<User> get(){
        return userService.get();
    }

    @GetMapping("/user/{id}")
    public User get(@PathVariable Integer id){
        User user = userService.get(id);
        if (user == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        return user;
    }

    @DeleteMapping("/user/{id}")
    public void delete(@PathVariable Integer id){
        userService.delete(id);
    }

    @PostMapping("/user")
    public User create(@RequestBody User user){
        return userService.create(user);
    }


}
