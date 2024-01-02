import { ResultModel } from "../models/result";

export interface AddResultModel extends Omit<ResultModel, "id">{

}

export interface AddResult {
    add(resultData: AddResultModel):Promise<ResultModel>
}