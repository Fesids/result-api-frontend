import { DeleteResult } from "../../../domain/usecases"
import { ResultRepository } from "../../protocols"

export class DbDeleteResult implements DeleteResult{
    constructor(private readonly registerRepository: ResultRepository){}
    async remove(id: string): Promise<String> {
        const result = await this.registerRepository.delete(id)

        return result
    }

    
}