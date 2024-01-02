import { ResultModel } from "../../../domain/models/result";
import { AddResult, AddResultModel } from "../../../domain/usecases";
import { ResultRepository } from "../../protocols/resultRepository";


export class DbAddResult implements AddResult{

    constructor(private readonly registerRepository: ResultRepository){}

    async add(resultData: AddResultModel) : Promise<ResultModel>{

        const result = await this.registerRepository.add(
            Object.assign({}, resultData)
        )

        return result
    }
    
}