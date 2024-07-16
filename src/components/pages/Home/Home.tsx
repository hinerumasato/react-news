import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import { WaveBackground } from "./WaveBackground"
import { SliderContainer } from "./SliderContainer"
import SubscribeNews from "@/components/partials/SubscribeNews"
import { useFeeds } from "@/hooks/useFeeds"
import INewsItem from "@/interfaces/INewsItem"
import { useTitle } from "@/hooks"
import { HomeNewsContainer } from "./HomeNewsContainer"
import { IHomeNews } from "@/interfaces/IHomeNews"
import { useFetchHomeFeeds } from "@/hooks/useFetchHomeFeeds"
import { Loading } from "@/components/vendors/Loading/Loading"

export const Home = () => {
    const [sliderData, setSliderData] = useState<INewsItem[]>([]);
    const [allHomeNewsObjects, setAllHomeNewsObjects] = useState<IHomeNews[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    useTitle('Trang chủ');

    useEffect(() => {

        setIsLoading(true);

        const getData = async () => {
            const sliderNews = await useFeeds('home.rss', 8);
            const allHomeNewsObjects = await useFetchHomeFeeds(8);

            setSliderData(sliderNews);
            setAllHomeNewsObjects(allHomeNewsObjects);
            setIsLoading(false);
        }

        getData();
    }, []);

    if (isLoading) {
        return <Loading />
    }

    return (
        <Container>
            <WaveBackground />
            <SliderContainer content={sliderData} />


            <Container className="d-flex justify-content-center flex-column">
                {allHomeNewsObjects.map((homeNewsObject, index) => {
                    return (
                        <HomeNewsContainer key={index} data={homeNewsObject.data} containerTitle={homeNewsObject.category} />
                    )
                })}

            </Container>
            <SubscribeNews />
        </Container>
    )
}
