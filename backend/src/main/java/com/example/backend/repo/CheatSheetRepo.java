package com.example.backend.repo;


import com.example.backend.model.CheatSheet;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Repository
public interface CheatSheetRepo extends MongoRepository<CheatSheet, String> {
}

