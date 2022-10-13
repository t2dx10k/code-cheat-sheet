
import CheatGallery from "../components/CheatGallery";
import {CheatSheet} from "../model/CheatSheet";
import "./MainPage.css"


type CheatGalleryProps = {
    commands: CheatSheet[]
    addCommand: (toAdd: CheatSheet) => void
}

export default function MainPage(props: CheatGalleryProps) {

    return (
        <>
            <h1 className={"h1-header"}>Everything is possible</h1>
            <div></div>
            <CheatGallery commands={props.commands} addCommand={props.addCommand}></CheatGallery>
        </>
    )
}