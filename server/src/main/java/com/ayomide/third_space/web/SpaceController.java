package com.ayomide.third_space.web;

import com.ayomide.third_space.model.Space;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SpaceController {
    private List<Space> db = List.of(new Space(1,"1418 Coffee", "1418 K Ave, Plano, TX 75074", "Upbeat indie coffeehouse with plush couches & chairs offering espresso drinks, smoothies & pastries.", "Coffee Shop", 4.9F));

    @GetMapping("/space")
    public List<Space> get(){
        return db;
    }
}
