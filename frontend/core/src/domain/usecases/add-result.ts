import { ResultModel } from "../models"

export interface AddResult {
    add:(body : AddResult.body) => Promise<AddResult.Model>
    
}

export namespace AddResult{

    export type body = {
        bimestre: number,
        disciplina: string,
        nota: number
    }

    export type Model = ResultModel | undefined
}