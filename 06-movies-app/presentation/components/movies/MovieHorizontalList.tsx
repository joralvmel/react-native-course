import {FlatList, Text, View} from 'react-native';
import {Movie} from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "@/presentation/components/movies/MoviePoster";

interface MovieHorizontalListProps {
    title?: string;
    movies: Movie[];
    className?: string;
}

const MovieHorizontalList = ({title, movies, className}:MovieHorizontalListProps) => {
    return (
        <View className={`${className}`}>
            {title && <Text className='text-xl font-bold px-4 mb-2'>{title}</Text>}
            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>
                    <MoviePoster id={item.id} poster={item.poster} smallPoster/>
            }
            />
        </View>
    )
}

export default MovieHorizontalList 