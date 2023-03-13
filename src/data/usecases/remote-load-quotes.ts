import { LoadQuotes } from "@/domain/usecases";
import { HttpClient } from "@/data/protocols";

export class RemoteLoadQuotes implements LoadQuotes {
  constructor(private readonly httpClient: HttpClient) {}

  async load(movieId: string): Promise<LoadQuotes.Result> {
    const { body } = await this.httpClient.request<LoadQuotes.Result>({
      method: "GET",
      url: `https://the-one-api.dev/v2/movie/${movieId}/quote`,
      headers: {
        Authorization: `Bearer ${process.env.LOTR_API_KEY}`,
      },
    });
    return body;
  }
}
