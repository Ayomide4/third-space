package com.ayomide.third_space.model;

import org.springframework.data.annotation.Id;

//check user details documentation

public class User {
    @Id
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    public User(){}

    public User(int id, String firstName, String lastName,String  email,String  password){
       this.id = id;
       this.firstName = firstName;
       this.lastName = lastName;
       this.email = email;
       this.password = password;
    }

    public String getFirstName(){
       return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
