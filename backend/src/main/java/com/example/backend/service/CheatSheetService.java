package com.example.backend.service;

import com.example.backend.model.CheatSheet;
import com.example.backend.repo.CheatSheetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheatSheetService {

    private final CheatSheetRepo repo;

    @Autowired
    public CheatSheetService(CheatSheetRepo cheatSheetRepo) {
        this.repo = cheatSheetRepo;
    }


    public List<CheatSheet> getAllCommands() {
        return repo.getAllCommands();
    }
}
