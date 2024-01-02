import { SubjectItem } from "..";
import { ResultModel } from "../../../../../domain/models";
import { makeDeleteResult } from "../../../../../main/factories/usecases/make-delete-result";
import "./list-style.scss";

type Props ={
    subjects?: Array<ResultModel>
}

const List = ({subjects}: Props) =>{

    return(
        <div className={"listContainer"}>
            {subjects?.length? subjects.map((subeject) => <SubjectItem data={subeject} deleteResult={makeDeleteResult(subeject.id)} key={subeject.id}/>) : <></>}
        </div>
    )

}

export default List