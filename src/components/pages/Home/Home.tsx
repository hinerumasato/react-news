import { Container } from "react-bootstrap"
import { parse, format } from 'date-fns';
import WaveBackground from "./WaveBackground"
import SliderContainer from "./SliderContainer"
import SubscribeNews from "@/components/partials/SubscribeNews"
import PaginatePage from "@/components/partials/PaginatePage"
import { useState, useEffect } from "react"
import { IRSSPostItem } from "@/interfaces/IRSSPostItem"
import NewsItemContainer from "@/components/vendors/News/NewsItemContainer";

export const Home = () => {
    const API_URL = 'http://localhost:8000/rss/';
    const [currentPage, setCurrentPage] = useState(1);
    const [sliderData, setSliderData] = useState([]);
    const [newsSportData, setNewsSportData] = useState([]);
    const [newsTechData, setNewsTechData] = useState([]);

    useEffect(() => {
        fetch(API_URL + 'home.rss')
            .then(res => res.json())
            .then(data => {
                const firstEightItems = data.data.slice(0, 8);

                const updatedItems = firstEightItems.map((item: IRSSPostItem) => {
                    const postTitle = item.title;
                    let postDate = item.pubDate;
                    const date = parse(postDate, 'EEE, dd MMM yyyy HH:mm:ss xx', new Date());
                    postDate = format(date, 'dd/MM/yyyy HH:mm');

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


        fetch(API_URL + 'the-thao.rss')
            .then(res => res.json())
            .then(data => {
                const firstEightItems = data.data.slice(0, 8);

                const updatedItems = firstEightItems.map((item: IRSSPostItem) => {
                    const postTitle = item.title;
                    let postDate = item.pubDate;
                    const date = parse(postDate, 'EEE, dd MMM yyyy HH:mm:ss xx', new Date());
                    postDate = format(date, 'dd/MM/yyyy HH');

                    const authorName = item['dc:creator'];
                    const authorImg = 'https://chobao.vn/wp-content/uploads/2023/02/Bao-Dan-tri.jpg';

                    const imgRegex = /<img.*?src='(.*?)'.*?>/;
                    const match = item.content.match(imgRegex);
                    const postImg = match ? match[1] : '';
                    return { title: postTitle, postDate, authorName, authorImg, postImg };
                });

                setNewsSportData(updatedItems);
            });

        fetch(API_URL + 'khoa-hoc-cong-nghe.rss')
            .then(res => res.json())
            .then(data => {
                const firstEightItems = data.data.slice(0, 8);

                const updatedItems = firstEightItems.map((item: IRSSPostItem) => {
                    const postTitle = item.title;
                    let postDate = item.pubDate;
                    const date = parse(postDate, 'EEE, dd MMM yyyy HH:mm:ss xx', new Date());
                    postDate = format(date, 'dd/MM/yyyy HH');

                    const authorName = item['dc:creator'];
                    const authorImg = 'https://chobao.vn/wp-content/uploads/2023/02/Bao-Dan-tri.jpg';

                    const imgRegex = /<img.*?src='(.*?)'.*?>/;
                    const match = item.content.match(imgRegex);
                    const postImg = match ? match[1] : '';
                    return { title: postTitle, postDate, authorName, authorImg, postImg };
                });

                setNewsTechData(updatedItems);
            });

    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    }



    return (
        <Container>
            <WaveBackground />
            <SliderContainer content={sliderData} />

            <Container className="d-flex justify-content-center flex-column">
                <NewsItemContainer data={newsTechData} />
                <NewsItemContainer data={newsSportData} />
            </Container>

            <SubscribeNews />
            <PaginatePage currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
        </Container>
    )
}
