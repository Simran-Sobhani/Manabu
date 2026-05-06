

export default function Folder({name, onClick}){
    return (
        <div>
            <div onClick={onClick} id={name} >
                <h2>{name}</h2>
            </div>
        </div>
    )
};