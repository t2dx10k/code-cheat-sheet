type AddCommandsProps = {

}
export default function AddCommands(props: AddCommandsProps) {

    return (
    <>
     <h3>Add New Command</h3>
        <input type={"text"} placeholder={"Name"}/>
        <input type={"text"} placeholder={"Command"}/>
        <input type={"text"} placeholder={"Category"}/>
        <textarea placeholder={"Description"}/>
    </>
    )
}