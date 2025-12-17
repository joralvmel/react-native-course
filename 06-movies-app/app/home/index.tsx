import {ActivityIndicator, Text, View} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {useMovies} from "@/presentation/hooks/useMovies";
import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator size={40} color="purple" />
            </View>
        )
    }

    return (
        <View className='mt-2' style={{paddingTop: safeArea.top}}>
            <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>

            {/* Main Slide Show */}
            <MainSlideShow movies={ nowPlayingQuery.data ?? [] } />
            {/* Popular Movies */}
            <MovieHorizontalList title='Popular' movies={ popularQuery.data ?? [] } />
        </View>
    )
}

export default HomeScreen 