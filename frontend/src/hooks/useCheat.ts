import {useEffect, useState} from "react";
import axios from "axios";

export default function useCheat(){

    const [cheat, setCheat] = useState([]);

    useEffect(()=>{getAllCommand()}, [])
    const getAllCommand = ()=>{
        axios.get("/api/cheatsheet/")
            .then((response)=>{return response.data})
            .then((cheat)=> {setCheat(cheat)})
    }

    /*
    const addCheat = (newTitle:string, newAuthor:string, newIsbn:string) => {
        let newBook = {
            title: newTitle,
            author: newAuthor,
            isbn: newIsbn
        }

        axios.put("/api/cheatsheet/" + newIsbn, newBook)
            .then(getAllCommand)
    }*/
    return {cheat}
}