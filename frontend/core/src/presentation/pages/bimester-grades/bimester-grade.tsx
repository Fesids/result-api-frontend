
import { GetResultList } from "../../../domain/usecases/get-results-list"
import { BimesterRange } from "../../constants"
import useResultList from "../../hooks/use-result-list"
import "./bimester-grade-styles.scss"
import { BimesterContainer } from "./components"


type Props = {
    loadResultList: GetResultList
}

export const BimesterGrade = ({loadResultList}: Props) =>{

    const {state, response} = useResultList(loadResultList);
    
    return(

        <div className={"bimesterGradeWrap"} >
           
            <div className={"contentWrap"}>
                {BimesterRange.map((bimester) => <BimesterContainer bimester={bimester} getResultList={loadResultList} key={bimester}/>)}
            </div>
        </div>
    )
}