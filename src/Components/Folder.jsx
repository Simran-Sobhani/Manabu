

export default function Folder({name, setView}){
    return (
        <div style={{cursor: "pointer"}}>
            <div onClick={() => setView("cards")} id={name} >
                <p>{name}</p>
            </div>
        </div>
    )
};