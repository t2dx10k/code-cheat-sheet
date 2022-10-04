package com.example.backend.repo;


import com.example.backend.model.CheatSheet;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Repository
public class CheatSheetRepo {

    private final Map<String, CheatSheet> cheatSheetMap;

    public CheatSheetRepo(List<CheatSheet> cheatSheetList) {
        Map<String,CheatSheet> temp = new HashMap<>();
        for (CheatSheet sheet : cheatSheetList) {
           temp.put(sheet.getId(),sheet);
        }
        this.cheatSheetMap = temp;
    }

    public List<CheatSheet> getAllCommands() {
        return List.copyOf(cheatSheetMap.values());
    }
}
