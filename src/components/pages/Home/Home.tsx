import {Container} from "react-bootstrap"
import {useEffect, useState} from "react"
import {WaveBackground} from "./WaveBackground"
import {SliderContainer} from "./SliderContainer"
import SubscribeNews from "@/components/partials/SubscribeNews"
import PaginatePage from "@/components/partials/PaginatePage"
import {NewsItemContainer} from "@/components/vendors/News/NewsItemContainer";
import {useFeeds} from "@/hooks/useFeeds"
import INewsItem from "@/interfaces/INewsItem"
import {useTitle} from "@/hooks"

export const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sliderData, setSliderData] = useState<INewsItem[]>([]);
    const [newsSportData, setNewsSportData] = useState<INewsItem[]>([]);
    const [newsTechData, setNewsTechData] = useState<INewsItem[]>([]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    }

    useTitle('Trang chủ');

    useEffect(() => {

        const getData = async () => {
            const sliderNews = await useFeeds('home.rss', 8);
            const sportNews = await useFeeds('the-thao.rss', 10)
            const techNews = await useFeeds('khoa-hoc-cong-nghe.rss', 10);

            setSliderData(sliderNews);
            setNewsSportData(sportNews);
            setNewsTechData(techNews);
        }

        getData();
    }, []);

    return (
        <Container>
            <WaveBackground/>
            <SliderContainer content={sliderData}/>

            <Container className="d-flex justify-content-center flex-column">
                <NewsItemContainer data={newsSportData} containerTitle="Thể thao"/>
                <NewsItemContainer data={newsTechData} containerTitle="Khoa học công nghệ"/>
            </Container>

            <SubscribeNews/>
            <PaginatePage currentPage={currentPage} totalPages={10} onPageChange={handlePageChange}/>
        </Container>
    )
}
