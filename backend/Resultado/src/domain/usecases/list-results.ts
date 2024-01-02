import { ResultModel } from "../models";

export interface ListResultModel extends Omit<ResultModel, "id">{
    _id: string
}

export interface ListResults {
    list():Promise<ResultModel[]>
}