import {Text, useWindowDimensions, View} from 'react-native';
import {Movie} from "@/infrastructure/interfaces/movie.interface";
import Carousel from "react-native-reanimated-carousel/src/components/Carousel";
import {ICarouselInstance} from "react-native-reanimated-carousel";
import {useRef} from "react";

interface MainSlideShowProps {
    movies: Movie[];
}

const MainSlideShow = ({movies}: MainSlideShowProps) => {
    const ref = useRef<ICarouselInstance>(null);
    const width = useWindowDimensions().width;

    return (
        <View className='h-[250px] w-full'>
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({item}) => <Text>{item.title}</Text>}
                width={200}
                height={350}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                mode='parallax'
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                defaultIndex={1}
            />
        </View>
    )
}

export default MainSlideShow 