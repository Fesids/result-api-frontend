import { useState } from "react"
import { SubjectList } from ".."
import { ResultModel } from "../../../../../domain/models"
import { TitleSection } from "../../../../components"
import Modal from "../../../../components/modal/modal"
import { BimesterRange } from "../../../../constants"
import "./bimester-style.scss"
import {} from "react-modal";
import { GetResultList } from "../../../../../domain/usecases"
import { useResultList } from "../../../../hooks"
import { makeAddResult } from "../../../../../main/factories/usecases"

type Props = {
    bimester: number,
    getResultList: GetResultList
}
const Bimester = ({bimester, getResultList}: Props) =>{

    const {state, response} = useResultList(getResultList);
    const [open, setOpen] = useState(false);
    
    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose= () =>{
        setOpen(false)
    }


    let testeObj = [] as ResultModel[]
    if(response)
        testeObj = Object.values(response);
    const subjectList = testeObj.filter(item => item.bimestre == bimester)

    return(
        <div className={"bimesterContainer"}>
            <Modal isOpen={open} close={handleClose} bimester={bimester} subjects={subjectList} addResult={makeAddResult()}/>
            <TitleSection bimester={bimester} onClick={handleOpen}/>
            <SubjectList subjects={subjectList}/>
        </div>
    )
}

export default Bimester;