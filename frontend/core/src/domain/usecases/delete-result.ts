import { ResultModel } from "../models/result-model"

export interface DeleteResult {
    delete:(id: DeleteResult.ResultId) => Promise<DeleteResult.Response>
    
}

export namespace DeleteResult{

    export type ResultId = string

    export type Response = string
}