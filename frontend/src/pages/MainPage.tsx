import CheatGallery from "../components/CheatGallery";
import {CheatSheet} from "../model/CheatSheet";
import "./MainPage.css"


type CheatGalleryProps = {
    commands: CheatSheet[]
    addCommand: (toAdd: CheatSheet) => void
    deleteCommand: (id: string) => void
}

export default function MainPage(props: CheatGalleryProps) {

    return (
        <>
            <main>
            <span><p className={"h1-header"}>Everything is possible</p></span>
            </main>

            <CheatGallery commands={props.commands} addCommand={props.addCommand} deleteCommand={props.deleteCommand}></CheatGallery>

            <main>
                <span><p className={"h1-header"}>Everything is possible</p></span>
            </main>
            
            <CheatGallery commands={props.commands} addCommand={props.addCommand} deleteCommand={props.deleteCommand}></CheatGallery>
        </>
    )
}