import {CheatSheet} from "../model/CheatSheet";
import CheatCard from "./CheatCard";
import AddCommands from "./AddCommands";
import "./CheatGallery.css"

type CheatGalleryProps = {
    commands: CheatSheet[]
    addCommand: (toAdd: CheatSheet) => void
    deleteCommand: (toDelete: string) => void
}

export default function CheatGallery(props: CheatGalleryProps){

    //const outputCard = props.commands.map((command) => <CheatCard cheat={command} key={command.id}/>)

    return(
        <>
            <AddCommands addCommand={props.addCommand}/>



            <div className={"cards"}>
                {props.commands.map((command) =>
                <div className={"card"}>
                <CheatCard cheat={command} deleteCommand={props.deleteCommand}/>
                </div>)}
            </div>

        </>
    )
}