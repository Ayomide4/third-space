package com.ayomide.third_space.service;

import com.ayomide.third_space.model.User;
import com.ayomide.third_space.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service //without annotation it fails to find bean
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }


    public String hello(){
        return "helworld";
    }


    public Iterable<User> get(){
        return userRepository.findAll();
    }

    public User get(Integer id){
        return userRepository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        userRepository.deleteById(id);
    }

    public User create(User user){
        userRepository.save(user);
        return user;
    }
}
