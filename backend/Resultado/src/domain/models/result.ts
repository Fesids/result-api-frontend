import { Bimester, Subject } from "../enums"


export interface ResultModel{
    id: String
    bimestre: Bimester
    disciplina: Subject
    nota: number
    criadoEm: Date
    atualizadoEm: Date
   
}