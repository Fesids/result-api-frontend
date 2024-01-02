import { useEffect, useState } from "react";
import { DeleteResult } from "../../domain/usecases";


const useDeleteResult = (deleteResult: DeleteResult, id:string): any =>{

    
    let response:string = "";
    let error:any; 

   
    deleteResult.delete(id)
    .then(response => {response = response})
    .catch(err => {error = err})


    return {
        response,
        error
    }
}

export default useDeleteResult;