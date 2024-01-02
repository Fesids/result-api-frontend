import { Bimester, Subject } from "../enums"

export interface ResultModel{
    id: string
    bimestre: Bimester
    disciplina: Subject
    nota: number
    criadoEm: Date
    atualizadoEm: Date
   
}