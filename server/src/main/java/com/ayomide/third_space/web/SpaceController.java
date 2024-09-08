package com.ayomide.third_space.web;

import com.ayomide.third_space.model.Space;
import com.ayomide.third_space.service.SpaceService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class SpaceController {

    private final SpaceService spaceService;

    public SpaceController(SpaceService spaceService){
        this.spaceService = spaceService;
    }

    @GetMapping("/space/hello")
    public String hello(){
        return spaceService.hello();
    }

    @GetMapping("/space")
    public Iterable<Space> get(){
        return spaceService.get();
    }

    @GetMapping("/space/{id}")
    public Space get(@PathVariable Integer id){
        Space space = spaceService.get(id);
        if(space == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        return space;
    }

    @DeleteMapping("/space/{id}")
    public void delete(@PathVariable Integer id){
        spaceService.delete(id);
    }

    @PostMapping("/space")
    public Space create(@RequestBody Space space){
        return spaceService.create(space);
    }
}
