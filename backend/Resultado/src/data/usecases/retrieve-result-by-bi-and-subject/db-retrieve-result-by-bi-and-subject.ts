import { Bimester, Subject } from "../../../domain/enums"
import { ResultModel } from "../../../domain/models/result"
import { RetrieveByBiAndSubject } from "../../../domain/usecases/retrive-by-bi-and-discipline"
import { ResultRepository } from "../../protocols"

export class DbRetriveResultByBiAndSubject implements RetrieveByBiAndSubject{

    constructor(private readonly resultRepository: ResultRepository){}
    async retrive(bimester: Bimester, subject: Subject): Promise<boolean> {
       const result = await (await this.resultRepository.retrieveByBimesterAndSubject(bimester, subject))

       if(!result){
        return false;
       }

       return true
    }

    
}