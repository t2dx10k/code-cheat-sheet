import {CheatSheet} from "../model/CheatSheet";
import "../components/CheatCard.css"

type CheatCardProps = {
    cheat: CheatSheet;
}

export default function CheatCard(props: CheatCardProps) {
    return (

        <div className={"cheatCard"}>
            <p>Name: {props.cheat.name}</p>
            <p>Befehl: {props.cheat.command}</p>
            <p>Kategorie: {props.cheat.category}</p>
            <p>Beschreibung: {props.cheat.description}</p>
        </div>
    )
}