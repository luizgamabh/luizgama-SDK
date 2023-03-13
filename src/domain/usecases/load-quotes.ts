import { ApiResult, Quote } from "@/domain/entities";

export interface LoadQuotes {
  load: (movieId: string) => Promise<LoadQuotes.Result>;
}

export namespace LoadQuotes {
  export type Result = ApiResult<Quote>;
}
