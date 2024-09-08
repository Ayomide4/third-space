package com.ayomide.third_space.repository;

import com.ayomide.third_space.model.Space;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpaceRepository extends CrudRepository<Space, Integer> {
}
