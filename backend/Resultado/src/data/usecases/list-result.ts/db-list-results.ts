import { ListResults } from "../../../domain/usecases";
import { ResultRepository, ResultModel } from "./db-list-results-protocols";


export class DbListResults implements ListResults{
    constructor(private readonly registerRepository: ResultRepository){}

    async list(): Promise<ResultModel[]> {
        const results = await this.registerRepository.findAll()

        return results
    }
    
}