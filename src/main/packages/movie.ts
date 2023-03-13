import { AxiosHttpClient } from "@/infra/http/axios-http-client";
import {
  RemoteLoadMovie,
  RemoteLoadMovies,
  RemoteLoadQuotes,
} from "@/data/usecases";
import { LoadMovie, LoadMovies, LoadQuotes } from "@/domain/usecases";

function movieFactory() {
  const loadMovies = async (): Promise<
    LoadMovies.Result | Record<string, Error>
  > => {
    const httpClient = new AxiosHttpClient();
    const loadMovies = new RemoteLoadMovies(httpClient);
    return loadMovies
      .load()
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.error(e);
        return { error: e.toString() };
      });
  };

  const loadMovie = async (
    movieId: string
  ): Promise<LoadMovie.Result | Record<string, Error>> => {
    const httpClient = new AxiosHttpClient();
    const loadMovies = new RemoteLoadMovie(httpClient);
    return loadMovies
      .load(movieId)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.error(e);
        return { error: e.toString() };
      });
  };

  const loadQuotes = async (
    movieId: string
  ): Promise<LoadQuotes.Result | Record<string, Error>> => {
    const httpClient = new AxiosHttpClient();
    const loadMovies = new RemoteLoadQuotes(httpClient);
    return loadMovies
      .load(movieId)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.error(e);
        return { error: e.toString() };
      });
  };

  return { loadMovie, loadMovies, loadQuotes };
}

export const Movie = movieFactory();
