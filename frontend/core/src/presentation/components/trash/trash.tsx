type Props = {
    onClick:() => void
}

const Trash = ({onClick}: Props) =>{

    return(
        <img src="/icons/Trash.svg" className="trashIcon" onClick={onClick}></img>
    )
}

export default Trash;