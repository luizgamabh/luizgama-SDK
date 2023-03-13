import faker from "faker";
import { HttpClient } from "@/data/protocols";

export const mockHttpRequestOptions = (): HttpClient.RequestOptions => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(["GET", "POST", "PUT", "PATCH", "DELETE"]),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement(),
});

export class HttpClientSpy<T> implements HttpClient {
  private url: string;
  private method: string;
  private body?: any;
  private headers?: any;
  response: HttpClient.Response<any> = {
    statusCode: 200,
    body: {
      docs: [],
    } as unknown as T,
  };

  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  async request<X extends T = T>(
    data: HttpClient.RequestOptions
  ): Promise<HttpClient.Response<X>> {
    this.url = data.url;
    this.method = data.method;
    this.body = data.body;
    this.headers = data.headers;
    return this.response;
  }
}
