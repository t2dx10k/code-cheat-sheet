import {CheatSheet} from "../model/CheatSheet";
import {useState} from "react";
import "./AddCommands.css"

type AddCommandsProps = {
    addCommand: (toAdd: CheatSheet) => void
}

export default function AddCommands(props: AddCommandsProps) {

    const emptyCommand: CheatSheet = {
        id: "",
        name: "",
        command: "",
        category: "",
        description: ""
    }

    const [command, setCommand] = useState(emptyCommand);

    return (
        <form className={"form-style"} onSubmit={(submit) => {
            props.addCommand(command);
            submit.preventDefault()
            setCommand(emptyCommand)
        }}>
            <h3>Add New Command</h3>
            <input
                type={"text"}
                placeholder={"Name"}
                value={command.name}
                onChange={(value) => setCommand((old) => ({...old, [value.target.name]: value.target.value}))}
                className={"input-style"}
                name={"name"}
            />

            <input
                type={"text"}
                placeholder={"Command"}
                value={command.command}
                onChange={(value) => setCommand((old) => ({...old, [value.target.name]: value.target.value}))}
                className={"input-style"}
                name={"command"}
            />
            <label>
                <select
                    className={"input-style"}
                    onChange={(value) => {
                        setCommand((old) => ({...old, category: value.target.value}))
                    }}
                    defaultValue={""}
                >
                    <option value={""} disabled={true}>Select Catagory</option>
                    <option value={"Java"}>Java</option>
                    <option value={"JavaScript"}>JavaScript</option>
                    <option value={"zsh-console"}>zsh-console</option>
                    <option value={"CSS"}>CSS</option>
                    <option value={"React"}>React</option>
                    <option value={"HTML"}>HTML</option>
                    <option value={"Axios"}>Axios</option>
                    <option value={"Mavenplugins"}>Maven Plugins</option>
                    <option value={"Docker"}>Docker</option>

                </select>
            </label>

            <textarea
                placeholder={"Description"}
                value={command.description}
                onChange={(value) => setCommand((old) => ({...old, [value.target.name]: value.target.value}))}
                className={"input-style-desc"}
                name={"description"}
            />

            <button className={"command-btn-style"} type={"submit"} name={"Add Command"}>Add Command</button>
        </form>
    )
}