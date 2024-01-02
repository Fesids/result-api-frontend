import { RemoteDeleteResult } from "../../../data/usecases"
import { RemoteAddResult } from "../../../data/usecases/remote-add-result"
import { AddResult} from "../../../domain/usecases"
import { AxiosHttpClient } from "../../../infra/http/axios-http-client"

export const makeAddResult = (): AddResult => {
    const url = `http://localhost:5002/api/v1/results`
    const axios = new AxiosHttpClient()
    const response = new RemoteAddResult(url, axios)
    return response
}