import { DeletedOrNotFoundError, UnexpectedError } from "../../domain/errors";
import { FailedToCreateError } from "../../domain/errors/failed-to-create-error";
import { ResultModel } from "../../domain/models";
import { AddResult } from "../../domain/usecases";
import { HttpClient, HttpStatusCode } from "../protocols/http";

export class RemoteAddResult implements AddResult{

    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteAddResult.Model>
    ){}

    async add(body: AddResult.body) : Promise<AddResult.Model>{
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: "post",
            body: body

        })
        const remoteResultResponse = httpResponse.body
        switch(httpResponse.statusCode) {
            case HttpStatusCode.ok: return remoteResultResponse
            case HttpStatusCode.badRequest: throw new FailedToCreateError()
            default: throw new UnexpectedError()
        }
    }
    
}

export namespace RemoteAddResult {
    export type Model = AddResult.Model
  }
  