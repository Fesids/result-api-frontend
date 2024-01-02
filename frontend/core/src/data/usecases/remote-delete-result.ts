import { DeletedOrNotFoundError, UnexpectedError } from "../../domain/errors";
import { DeleteResult } from "../../domain/usecases";
import { HttpClient, HttpStatusCode } from "../protocols/http";

export class RemoteDeleteResult implements DeleteResult{

    constructor (
        private readonly url: string, 
        private readonly httpClient: HttpClient<DeleteResult.Response>
    ){}
    async delete(id: string) : Promise<any>{
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'delete'
        })
        const remoteResultResponse = httpResponse.body

        switch(httpResponse.statusCode) {
            case HttpStatusCode.ok: return remoteResultResponse
            case HttpStatusCode.badRequest: throw new DeletedOrNotFoundError(id)
            default: throw new UnexpectedError()
        }
    }
}

export namespace RemoteDeleteResult{
    export type Response = string
}