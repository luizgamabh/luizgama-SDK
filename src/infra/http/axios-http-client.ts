import { HttpClient } from '@/data/protocols/httpClient'

import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
    async request<T = any>(data: HttpClient.RequestOptions): Promise<HttpClient.Response<T>> {
        let axiosResponse: AxiosResponse
        try {
            axiosResponse = await axios.request(data)
        } catch (error) {
            axiosResponse = error.response
        }
        return {
            statusCode: axiosResponse.status,
            body: axiosResponse.data as T
        }
    }
}
