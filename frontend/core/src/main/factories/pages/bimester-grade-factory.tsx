import { BimesterGrade } from "../../../presentation/pages/bimester-grades/bimester-grade"
import { makeGetResultList } from "../usecases/make-get-result-list"


export const MakeBimesterGrade = () =>{
    return(
        <BimesterGrade loadResultList={makeGetResultList()}/>
    )
}