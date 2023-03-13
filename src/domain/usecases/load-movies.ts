import { ApiResult, Movie } from '@/domain/entities'

export interface LoadMovies {
  load: () => Promise<LoadMovies.Result>
}

export namespace LoadMovies {
  export type Result = ApiResult<Movie>
}
