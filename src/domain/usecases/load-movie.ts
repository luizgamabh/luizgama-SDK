import {ApiResult, Movie} from '@/domain/entities'

export interface LoadMovie {
    load: (movieId: string) => Promise<LoadMovie.Result>
}

export namespace LoadMovie {
    export type Result = ApiResult<Movie>
}
