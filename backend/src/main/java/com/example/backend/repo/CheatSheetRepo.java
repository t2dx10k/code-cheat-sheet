package com.example.backend.repo;


import com.example.backend.model.CheatSheet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CheatSheetRepo extends MongoRepository<CheatSheet, String> {

}

