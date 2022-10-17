import {CheatSheet} from "../model/CheatSheet";
import CheatCard from "./CheatCard";
import AddCommands from "./AddCommands";
import "./CheatGallery.css"
import {useState} from "react";

type CheatGalleryProps = {
    commands: CheatSheet[]
    addCommand: (toAdd: CheatSheet) => void
}

export default function CheatGallery(props: CheatGalleryProps){

    const [search, setSearch] = useState("");
    const filteredCheatSheets = props.commands.filter((command) =>
        command.name.toLowerCase().includes(search.toLowerCase()))

    return(
        <>
            <AddCommands addCommand={props.addCommand}/>

            <>
                <form>
                    <input className={"input-style"} type={"text"} placeholder={"Search"} onChange={(event) => setSearch(event.target.value)}/>
                </form>
            </>

            <div className={"cards"}>
                {filteredCheatSheets.map((command) =>
                <div className={"card"}>
                <CheatCard cheat={command}/>
                </div>)}
            </div>

        </>
    )
}