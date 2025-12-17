import {movieApi} from "@/core/api/movie-api";
import {MovieDBMoviesResponse} from "@/infrastructure/interfaces/moviedb-response";

export const nowPlayingActions = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');
        // console.log(JSON.stringify(data, null, 2));

        return [];

    } catch (error) {
        console.error('Error fetching now playing movies:', error);
        throw error;
    }
}