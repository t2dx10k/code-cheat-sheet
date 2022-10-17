import {useEffect, useState} from "react";
import axios from "axios";
import {CheatSheet} from "../model/CheatSheet";

export default function useCheat() {

    const [cheat, setCheat] = useState([]);

    useEffect(() => {

        getAllCommand()

    }, [])

    const getAllCommand = () => {
        axios.get("/api/cheatsheet/")
            .then((response) => {
                return response.data
            })
            .then((cheat) => {
                setCheat(cheat)
            })
            .catch(() => console.error())
    }

    const addCommand = (commandToAdd: CheatSheet) => {
        axios.post("/api/cheatsheet/", commandToAdd)
            .then(getAllCommand)
            .catch(() => console.error())
    }


    const deleteCheatSheet = (id: String) => {
        axios.delete("/api/cheatsheet/" + id)
            .then(getAllCommand)
            .catch(() => console.error())
    }




    return {cheat, addCommand, deleteCheatSheet}
}