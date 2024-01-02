import { BSON } from "mongodb";
import { ResultRepository } from "../../../../data/protocols/resultRepository";
import { ResultModel } from "../../../../domain/models/result";
import { AddResultModel, ListResultModel } from "../../../../domain/usecases";
import { MongoHelper } from "../helpers/mongo-helper";
import { Bimester, Subject } from "../../../../domain/enums";

export class ResultMongoRepository implements ResultRepository{
    async retrieveByBimesterAndSubject(bimester: Bimester, subject: Subject): Promise<any> {
        const resultCollection = await MongoHelper.getCollection('results')
        const result = await resultCollection.findOne({disciplina: subject, bimestre: bimester});
        
        return result
    }
    async delete(id: string): Promise<string> {
        const resultCollection = await MongoHelper.getCollection('results')
        await resultCollection.findOneAndDelete({_id: new BSON.ObjectId(id)});
        return `O resultado de id ${id} foi excluído`
    }

    async add(registerData: AddResultModel) : Promise<ResultModel>{
        const resultCollection = await MongoHelper.getCollection('results')
        const insertedResult = await resultCollection.insertOne(registerData)
        const result = await resultCollection.findOne({_id: insertedResult.insertedId});
        return MongoHelper.map(result);
    }

    async findAll() : Promise<ResultModel[]>{
        const resultCollection = await MongoHelper.getCollection('results')
        const resultList = await resultCollection.find<ListResultModel>({}).toArray()

        const resultListMapping = resultList.map(res => MongoHelper.map(res))
        
        return resultListMapping
    }
    
}