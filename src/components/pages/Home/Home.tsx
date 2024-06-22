
import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import WaveBackground from "./WaveBackground"
import SliderContainer from "./SliderContainer"
import SubscribeNews from "@/components/partials/SubscribeNews"
import PaginatePage from "@/components/partials/PaginatePage"
import NewsItemContainer from "@/components/vendors/News/NewsItemContainer";
import useGetNewsItems from "@/hooks/useGetNewsItems"
import INewsItem from "@/interfaces/INewsItem"
import { useTitle } from "@/hooks"

export const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sliderData, setSliderData] = useState<INewsItem[]>([]);
    const [newsSportData, setNewsSportData] = useState<INewsItem[]>([]);
    const [newsTechData, setNewsTechData] = useState<INewsItem[]>([]);
    const sliderNews = useGetNewsItems('home.rss', 8);
    const sportNews = useGetNewsItems('the-thao.rss', 10)
    const techNews = useGetNewsItems('khoa-hoc-cong-nghe.rss', 10);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    }

    useTitle('Trang chủ');

    useEffect(() => {
        setSliderData(sliderNews);
        setNewsSportData(sportNews);
        setNewsTechData(techNews);
    }, [sliderNews, sportNews, techNews]);

    return (
        <Container>
            <WaveBackground />
            <SliderContainer content={sliderData} />

            <Container className="d-flex justify-content-center flex-column">
                <NewsItemContainer data={newsSportData} containerTitle="Thể thao" />
                <NewsItemContainer data={newsTechData} containerTitle="Khoa học công nghệ" />
            </Container>

            <SubscribeNews />
            <PaginatePage currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
        </Container>
    )
}
