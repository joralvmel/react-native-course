import {movieApi} from "@/core/api/movie-api";
import {MovieDBMoviesResponse} from "@/infrastructure/interfaces/moviedb-response";
import {MovieMapper} from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');
        // console.log(JSON.stringify(data, null, 2));
        return data.results.map(MovieMapper.fromTheMovieDBToMovie);

    } catch (error) {
        console.error('Error fetching now playing movies:', error);
        throw error;
    }
}