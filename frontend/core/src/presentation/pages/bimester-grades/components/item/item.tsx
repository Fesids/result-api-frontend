import { ResultModel } from "../../../../../domain/models"
import { DeleteResult } from "../../../../../domain/usecases"
import { Subject, TrashIcon } from "../../../../components"
import useDeleteResult from "../../../../hooks/use-delete-result"
import "./item-style.scss"

type Props = {
    data: ResultModel,
    deleteResult: DeleteResult
}

const Item = ({data, deleteResult}: Props) =>{


    const handleDelete = () =>{
        const {response, error} = useDeleteResult(deleteResult, data.id);
        console.log(response)
    }

 

    return(
        <div className="subjectItemWrap">
            <Subject data={data}/>
            <TrashIcon onClick={handleDelete}/>
        </div>
    )

}

export default Item;