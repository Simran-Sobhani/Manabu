

export default function Folder({name, setView, getWords}){
    return (
        <div style={{cursor: "pointer"}}>
            <div onClick={() => {
                setView("cards");
                getWords(name);
                }} id={name} >
                <p>Words for {name}</p>
            </div>
        </div>
    )
};