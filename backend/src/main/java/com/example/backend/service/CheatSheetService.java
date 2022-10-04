package com.example.backend.service;

import com.example.backend.repo.CheatSheetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheatSheetService {

    private CheatSheetRepo cheatSheetRepo;

    @Autowired
    public CheatSheetService(CheatSheetRepo cheatSheetRepo) {
        this.cheatSheetRepo = cheatSheetRepo;
    }


}
