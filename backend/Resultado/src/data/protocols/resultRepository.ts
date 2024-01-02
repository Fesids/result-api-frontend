import { Bimester, Subject } from "../../domain/enums";
import { ResultModel } from "../../domain/models/result";
import { AddResultModel } from "../../domain/usecases";

export interface ResultRepository{
    add(registerData: AddResultModel) :Promise<ResultModel>,

    findAll() : Promise<ResultModel[]>

    delete(id: string): Promise<string>

    retrieveByBimesterAndSubject(bimester: Bimester, subject: Subject) : Promise<any>
}