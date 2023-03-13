export interface HttpClient {
  request: HttpClient.Request;
}

export namespace HttpClient {
  export type RequestOptions = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    url: string;
    headers?: any;
    body?: any;
  };
  
  export type Request = <T = any>(
      options: HttpClient.RequestOptions
  ) => Promise<HttpClient.Response<T>>

  export type Response<T> = {
    statusCode: number;
    body: T;
  };
}
