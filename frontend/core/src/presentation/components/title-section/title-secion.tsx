import { memo, useState } from "react"
import "./title-section-style.scss"
import { Button, PlusIcon } from ".."


type Props = {
    bimester: number,
    onClick: () => void
}
const TitleSection = ({bimester, onClick}: Props) =>{

    return(
        <div className="titleSectionContainer">
            
            <p>Bimestre {bimester}</p>
            <Button content="Lançar nota" onClick={onClick}/>
        </div>
    )

}

export default memo(TitleSection)