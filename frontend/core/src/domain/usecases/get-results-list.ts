import { ResultModel } from "../models/result-model"

export interface GetResultList {
    perform:() => Promise<GetResultList.Response>
}

export namespace GetResultList{
    

    export type Response = ResultModel[]
        
}