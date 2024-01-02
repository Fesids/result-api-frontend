import {Request, Response} from "express";
import { ResultMongoRepository } from "../../infra/db/mongodb/repositories/resultRepository";
import { DbAddResult } from "../../data/usecases/add-result.ts/db-add-result";
import { CreateResultController } from "../../presentation/controllers/create";
import { DbListResults } from "../../data/usecases/list-result.ts/db-list-results";
import { ListResultsController } from "../../presentation/controllers/list";
import { DbDeleteResult } from "../../data/usecases/delete-result/db-delete-result";
import { DeleteResultController } from "../../presentation/controllers/delete";
import { GradeValidatorAdpter } from "../../presentation/utils/grade-validator-adpter";
import { DbRetriveResultByBiAndSubject } from "../../data/usecases/retrieve-result-by-bi-and-subject/db-retrieve-result-by-bi-and-subject";

export const deleteResult = async (req: Request, res:Response) =>{
    const resultMongoRepository = new ResultMongoRepository();

    const dbDeleteResult = new DbDeleteResult(resultMongoRepository);

    const controller = new DeleteResultController(dbDeleteResult);

    const {body, statusCode} = await controller.handle({
        params: req.params
    })

    res.status(statusCode).json(body)

}

export const listResults = async (req:Request, res:Response) =>{
    const resultMongoRepository = new ResultMongoRepository();

    const dbListResult = new DbListResults(resultMongoRepository);
    
    const controller = new ListResultsController(dbListResult);

    const {body, statusCode} = await controller.handle({});

    res.status(statusCode).json(body);

}

export const createResultController = async (req:Request, res: Response) =>{
    const resultMongoRepository = new ResultMongoRepository();
    const gradeValidatorAdpater = new GradeValidatorAdpter();

    const dbAddResult = new DbAddResult(resultMongoRepository);
    const dbRetrieveBySubject = new DbRetriveResultByBiAndSubject(resultMongoRepository);

    const controller = new CreateResultController(dbAddResult, gradeValidatorAdpater, dbRetrieveBySubject);

    const {body, statusCode} = await controller.handle({
        body: req.body
    })

    res.status(statusCode).json(body)

}