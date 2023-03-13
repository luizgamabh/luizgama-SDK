import { LoadMovies } from "@/domain/usecases";
import { HttpClient } from "@/data/protocols";

export class RemoteLoadMovies implements LoadMovies {
  constructor(private readonly httpClient: HttpClient) {}

  async load(): Promise<LoadMovies.Result> {
    const { body } = await this.httpClient.request<LoadMovies.Result>({
      method: "GET",
      url: "https://the-one-api.dev/v2/movie",
      headers: {
        Authorization: `Bearer ${process.env.LOTR_API_KEY}`,
      },
    });
    return body;
  }
}
