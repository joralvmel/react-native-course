import {useQuery} from "@tanstack/react-query";
import {nowPlayingActions} from "@/core/actions/movies/now-playing.actions";


export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingActions,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    })

    return {
        nowPlayingQuery
    }
}