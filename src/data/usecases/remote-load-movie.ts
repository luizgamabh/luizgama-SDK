import { LoadMovie } from "@/domain/usecases";
import { HttpClient } from "@/data/protocols";

export class RemoteLoadMovie implements LoadMovie {
  constructor(private readonly httpClient: HttpClient) {}

  async load(movieId: string): Promise<LoadMovie.Result> {
    const { body } = await this.httpClient.request<LoadMovie.Result>({
      method: "GET",
      url: `https://the-one-api.dev/v2/movie/${movieId}}`,
      headers: {
        Authorization: `Bearer ${process.env.LOTR_API_KEY}`,
      },
    });
    return body;
  }
}
