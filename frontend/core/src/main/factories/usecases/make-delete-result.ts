import { RemoteDeleteResult } from "../../../data/usecases"
import { DeleteResult } from "../../../domain/usecases"
import { AxiosHttpClient } from "../../../infra/http/axios-http-client"

export const makeDeleteResult = (id: string): DeleteResult => {
    const url = `http://localhost:5002/api/v1/results/${id}`
    const axios = new AxiosHttpClient()
    const response = new RemoteDeleteResult(url, axios)
    return response
}