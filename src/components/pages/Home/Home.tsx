import { Container } from "react-bootstrap"
import WaveBackground from "./WaveBackground"
import SliderContainer from "./SliderContainer"
import SubscribeNews from "@/components/partials/SubscribeNews"
import PaginatePage from "@/components/partials/PaginatePage"
import { useState, useEffect } from "react"
import { IRSSPostItem } from "@/interfaces/IRSSPostItem"

export const Home = () => {
    const API_URL = 'http://localhost:8000/rss/';
    const [currentPage, setCurrentPage] = useState(1);
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        fetch(API_URL + 'home.rss')
            .then(res => res.json())
            .then(data => {
                const firstEightItems = data.data.slice(0, 8);

                const updatedItems = firstEightItems.map((item: IRSSPostItem) => {
                    const postTitle = item.title;
                    const postDate = item.pubDate;
                    const authorName = item['dc:creator'];
                    const authorImg = 'https://chobao.vn/wp-content/uploads/2023/02/Bao-Dan-tri.jpg';

                    const imgRegex = /<img.*?src='(.*?)'.*?>/;
                    const match = item.content.match(imgRegex);
                    const postImg = match ? match[1] : '';
                    return { title: postTitle, postDate, authorName, authorImg, postImg };
                });

                setSliderData(updatedItems);
            })
            .catch(err => console.error(err));
    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    }



    return (
        <Container>
            <WaveBackground />
            <SliderContainer content={sliderData} />
            <SubscribeNews />
            <PaginatePage currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
        </Container>
    )
}
