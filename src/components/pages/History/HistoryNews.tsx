import INewsItem from "@/interfaces/INewsItem.ts";
import { useEffect, useState } from "react";
import { NewsItem } from "@/components/vendors/News/NewsItem.tsx";

export const HistoryNews = () => {
    // Lấy dữ liệu từ local storage khi khởi tạo state
    const [viewedNews, setViewedNews] = useState<INewsItem[]>(() => {
        const savedNews = localStorage.getItem('viewedNews');
        if (savedNews) {
            return JSON.parse(savedNews);
        } else {
            return [];
        }
    });

    // Lưu state vào local storage mỗi khi nó thay đổi


    return (
        <div>
            <h1>Lịch sử xem</h1>
            <ul>
                {viewedNews.map(({
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
                                  categories={newsCategories} link={link}/>
                    );
                })}
            </ul>
        </div>
    );

}