import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import { WaveBackground } from "./WaveBackground"
import { SliderContainer } from "./SliderContainer"
import SubscribeNews from "@/components/partials/SubscribeNews"
import PaginatePage from "@/components/partials/PaginatePage"
import { useFeeds } from "@/hooks/useFeeds"
import INewsItem from "@/interfaces/INewsItem"
import { useTitle } from "@/hooks"
import { HomeNewsContainer } from "./HomeNewsContainer"
import { IHomeNews } from "@/interfaces/IHomeNews"
import { useFetchHomeFeeds } from "@/hooks/useFetchHomeFeeds"

export const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sliderData, setSliderData] = useState<INewsItem[]>([]);
    const [allHomeNewsObjects, setAllHomeNewsObjects] = useState<IHomeNews[]>([]);


    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    useTitle('Trang chủ');

    useEffect(() => {

        const getData = async () => {
            const sliderNews = await useFeeds('home.rss', 8);
            const allHomeNewsObjects = await useFetchHomeFeeds(8);

            setSliderData(sliderNews);
            setAllHomeNewsObjects(allHomeNewsObjects);

        }

        getData();
    }, []);

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
            <PaginatePage currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
        </Container>
    )
}
