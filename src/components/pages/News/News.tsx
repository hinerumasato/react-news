import CategoryBar from "@/components/pages/News/CategoryBar.tsx";
import { Waves } from "@/components/vendors";
import NewsItem from "@/components/vendors/News/NewsItem.tsx";
import { useTitle } from "@/hooks";
import {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import INewsItem from "@/interfaces/INewsItem.ts";
import useFeeds from "@/hooks/useFeeds.ts";

export const News = () => {
    const [newsData, setNewsData] = useState<INewsItem[]>([])
    const newsItems = useFeeds('home.rss', 10)

    useTitle('Tin tức');

    useEffect(() => {
        setNewsData(newsItems)
        console.log(newsItems)
    }, [])

    return (
        <Container>
            <CategoryBar />
            <div className="d-flex align-items-center">
                <Waves />
                <h3>Nội dung mới nhất</h3>
            </div>
            <ul>
                {newsData.map(({title, pubDate, authorName, authorImg, newsImg, newsCategories, contentSnippet, link}, index) => {
                    return (
                        <NewsItem key={index} title={title} newsImg={newsImg} authorName={authorName} authorImg={authorImg} pubDate={pubDate} description={contentSnippet} categories={newsCategories} link={link} />
                    );
                })}
            </ul>
        </Container>
    )
}
