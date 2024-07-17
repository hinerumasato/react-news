import { CategoryBar } from "@/components/pages/News/CategoryBar/CategoryBar.tsx";
import { Waves } from "@/components/vendors";
import { NewsItem } from "@/components/vendors/News/NewsItem.tsx";
import { useTitle } from "@/hooks";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import INewsItem from "@/interfaces/INewsItem.ts";
import { useFeeds } from "@/hooks/useFeeds.ts";
import { Loading } from "@/components/vendors/Loading/Loading.tsx";
import { usePaginate } from "@/hooks/usePaginate";
import { WVPagination } from "@/components/vendors/Pagination/WVPagination";

export const News = () => {
    const [newsData, setNewsData] = useState<INewsItem[]>([])
    const [currentCategory, setCurrentCategory] = useState('home.rss')
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('Tin tức');
    const { currentItems, currentPage, setCurrentPage, totalPages } = usePaginate(newsData, 8);
    
    useTitle(title);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const newsItems = await useFeeds(currentCategory, 30);
            setNewsData(newsItems);
            setIsLoading(false)
        }

        fetchData();
    }, [currentCategory]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleChangeCategory(category: { ['name']: string, ['rss']: string }) {
        const title = `Tin tức: ${category.name}`;
        setCurrentCategory(category.rss);
        setTitle(title);
        setCurrentPage(1);
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
                {currentItems.map(({
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
            <WVPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </Container>
    )
}

