import { CategoryBar } from "@/components/pages/News/CategoryBar.tsx";
import { Waves } from "@/components/vendors";
import { NewsItem } from "@/components/vendors/News/NewsItem.tsx";
import { useTitle } from "@/hooks";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import INewsItem from "@/interfaces/INewsItem.ts";
import { useFeeds } from "@/hooks/useFeeds.ts";
import { Loading } from "@/components/vendors/Loading/Loading.tsx";

export const News = () => {
    const [newsData, setNewsData] = useState<INewsItem[]>([])
    const [currentCategory, setCurrentCategory] = useState('home.rss')
    // const newsItems = useFeeds(currentCategory, 30);
    const [isLoading, setIsLoading] = useState(false);
    useTitle('Tin tức');

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const newsItems = await useFeeds(currentCategory, 30);
            setNewsData(newsItems);
            setIsLoading(false)
        }

        fetchData();
    }, [currentCategory]);

    function handleChangeCategory(category: { ['name']: string, ['rss']: string }) {
        setCurrentCategory(category.rss);
        useTitle(`Tin tức: ${category.name}`);

    }

    if (isLoading)
        return <Loading />

    return (
        <Container>
            <CategoryBar onChangeCategory={handleChangeCategory} />
            <div className="d-flex align-items-center">
                <Waves />
                <h3>Nội dung mới nhất</h3>
            </div>
            <ul>
                {newsData.map(({
                    title,
                    pubDate,
                    authorName,
                    authorImg,
                    newsImg,
                    newsCategories,
                    contentSnippet,
                    link
                }, index) => {
                    return (
                        <NewsItem key={index} title={title} newsImg={newsImg} authorName={authorName}
                            authorImg={authorImg} pubDate={pubDate} description={contentSnippet}
                            categories={newsCategories} link={link} />
                    );
                })}
            </ul>

        </Container>
    )
}

