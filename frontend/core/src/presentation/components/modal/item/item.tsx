import { ResultModel } from "../../../../domain/models"
import { choiceSubjectBgColor } from "../../../hooks"
import style from "./item-style.module.scss"


type Props = {
    
    data: string,
    onClick: (subject:string,e:any) => void
}

const Item = ({data, onClick}:Props) =>{

    return(
        <div className={style.modalSubject} style={choiceSubjectBgColor(data)} onClick={(e:any)=> onClick(data, e)} defaultValue={data}>{data}</div>
    )

}

export default Item;