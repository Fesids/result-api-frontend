import { UnexpectedError } from "../../domain/errors";
import { GetResultList } from "../../domain/usecases/get-results-list";
import { HttpClient, HttpStatusCode } from "../protocols/http";

export class RemoteGetResultList implements GetResultList{

    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteGetResultList.Model>
    ){}

    async perform() : Promise<GetResultList.Response>{
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'get'
        });

        switch (httpResponse.statusCode){
            case HttpStatusCode.ok:
                return httpResponse.body as GetResultList.Response
            default:
                throw new UnexpectedError().message;
        }
    }
    
}

export namespace RemoteGetResultList {
    export type Model = GetResultList.Response 
  }
  