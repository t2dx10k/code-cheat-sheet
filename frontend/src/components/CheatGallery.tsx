import {CheatSheet} from "../model/CheatSheet";
import CheatCard from "./CheatCard";
import AddCommands from "./AddCommands";

type CheatGalleryProps = {
    commands: CheatSheet[]
    addCommand: (toAdd: CheatSheet) => void

}

export default function CheatGallery(props: CheatGalleryProps){

    const outputCard = props.commands.map((command) => <CheatCard cheat={command} key={command.id}/>)

    return(
        <>
            <AddCommands addCommand={props.addCommand}/>
            {outputCard}
        </>
    )
}