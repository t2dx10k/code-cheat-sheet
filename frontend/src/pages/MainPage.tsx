
import CheatGallery from "../components/CheatGallery";
import {CheatSheet} from "../model/CheatSheet";


type CheatGalleryProps = {
    commands: CheatSheet[]

}

export default function MainPage(props: CheatGalleryProps) {

    return (
        <>
            <h1>Marek du Cheater!!!!!! </h1>
            <div ></div>
            <CheatGallery commands={props.commands}></CheatGallery>
        </>
    )
}