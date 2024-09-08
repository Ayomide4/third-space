package com.ayomide.third_space.service;

import com.ayomide.third_space.model.Space;
import com.ayomide.third_space.repository.SpaceRepository;
import org.springframework.stereotype.Service;

@Service
public class SpaceService {

    private final SpaceRepository spaceRepository;

    public SpaceService(SpaceRepository spaceRepository){
        this.spaceRepository = spaceRepository;
    }

    public Iterable<Space> get(){
        return spaceRepository.findAll();
    }

    public String hello() {
       return "Hello world";
    }

    public Space get(Integer id){
       return spaceRepository.findById(id).orElse(null);
    }

    public void delete(Integer id){
        spaceRepository.deleteById(id);
    }

    public Space create(Space space){
        spaceRepository.save(space);
        return space;
    }

}
