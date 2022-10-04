package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CheatSheet {

    private String id;
    private String name;
    private String command;
    private String category;
    private String description;

}
