import { ListResults } from "../../domain/usecases";
import { badRequest, ok } from "../helpers/http-helpers";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class ListResultsController implements Controller{
    constructor(private readonly listResults: ListResults){}
    async handle(httpRequest: HttpRequest) :Promise<HttpResponse>{
       try{
            const results = await this.listResults.list();

            if(!results.length){
                return ok("Nenhum resultado encontrado")
            }

            return ok(results);

       }catch(err:any){
            return badRequest(err)
       }
    }
    
}