package com.ayomide.third_space.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("SPACES")
public class Space {
    @Id
    private int id;
    private String name;
    private String address;
    private String description;
    private String category;
    private float rating;

    public Space(){};
    public Space(String name, String address, String description, String category, float rating){
         this.name = name;
         this.address = address;
         this.description = description;
         this.category = category;
         this.rating = rating;
     };

     public int getId() {
         return id;
     }

     public String getName() {
         return name;
     }

     public void setName(String name) {
         this.name = name;
     }

     public String getAddress() {
         return address;
     }

     public void setAddress(String address) {
         this.address = address;
     }

     public String getDescription() {
         return description;
     }

     public void setDescription(String description) {
         this.description = description;
     }

     public String getCategory() {
         return category;
     }

     public void setCategory(String category) {
         this.category = category;
     }

     public float getRating() {
         return rating;
     }

     public void setRating(float rating) {
         this.rating = rating;
     }
}
