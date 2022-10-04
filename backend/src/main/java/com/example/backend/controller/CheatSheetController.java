package com.example.backend.controller;


import com.example.backend.model.CheatSheet;
import com.example.backend.service.CheatSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cheatsheet/")
public class CheatSheetController {

    private final CheatSheetService service;

    @Autowired
    public CheatSheetController(CheatSheetService service) {
        this.service = service;
    }

    @GetMapping
    public List<CheatSheet> getAllCommands() {
        return service.getAllCommands();
    }
}
