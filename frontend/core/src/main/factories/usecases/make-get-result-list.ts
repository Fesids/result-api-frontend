import { RemoteGetResultList } from "../../../data/usecases";
import { GetResultList } from "../../../domain/usecases/get-results-list";
import { AxiosHttpClient } from "../../../infra/http/axios-http-client";


export const makeGetResultList = (): GetResultList => {
    const url = 'http://localhost:5002/api/v1/results'
    const axios = new AxiosHttpClient()
    const resp = new RemoteGetResultList(url, axios)
    return resp
}