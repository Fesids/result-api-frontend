import { DeleteResult } from "../../domain/usecases";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { badRequest, ok, serverError } from "../helpers/http-helpers";
import { MissingRequestParamError } from "../errors/missing-request-param-error";

export class DeleteResultController implements Controller{
    constructor(private readonly deleteResult: DeleteResult){}
    async handle(httpRequest: HttpRequest): 
    Promise<HttpResponse> {
        const {id} = httpRequest.params;
        try{

            if(!id){
                return badRequest(new MissingRequestParamError(id))
            }

            const result = await this.deleteResult.remove(id);

            return ok(result);

        }catch(err:any){
            return badRequest(`O objeto de ID "${id}" não pode ser encontrado ou já foi excluído!`)
        }
    }
    
}