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
    useEffect(() => {
        localStorage.setItem('viewedNews', JSON.stringify(viewedNews));
    }, [viewedNews]);

    return (
        <div>
            <div className="d-flex align-items-center py-3 px-3">
                <div className="waves-color me-2">
                    <div className="waves-pink">
                        <svg viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 4.5C14.5867 4.5 13.8698 3.9625 13.1767 3.4425C12.5305 2.9575 11.9197 2.5 10.6667 2.5C9.41359 2.5 8.80288 2.95813 8.15634 3.4425C7.46327 3.9625 6.74667 4.5 5.33307 4.5C3.91948 4.5 3.20314 3.9625 2.51007 3.4425C1.86379 2.9575 1.25307 2.5 0 2.5V0C1.41333 0 2.12993 0.5375 2.82301 1.0575C3.46928 1.5425 4.08 2 5.33307 2C6.58614 2 7.19686 1.54188 7.84314 1.0575C8.53647 0.5375 9.25307 0 10.6667 0C12.0803 0 12.7969 0.5375 13.4899 1.0575C14.1362 1.5425 14.7469 2 16.0003 2V4.5H16Z"
                                fill="currentColor"/>
                        </svg>
                        <svg viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 4.5C14.5867 4.5 13.8698 3.9625 13.1767 3.4425C12.5305 2.9575 11.9197 2.5 10.6667 2.5C9.41359 2.5 8.80288 2.95813 8.15634 3.4425C7.46327 3.9625 6.74667 4.5 5.33307 4.5C3.91948 4.5 3.20314 3.9625 2.51007 3.4425C1.86379 2.9575 1.25307 2.5 0 2.5V0C1.41333 0 2.12993 0.5375 2.82301 1.0575C3.46928 1.5425 4.08 2 5.33307 2C6.58614 2 7.19686 1.54188 7.84314 1.0575C8.53647 0.5375 9.25307 0 10.6667 0C12.0803 0 12.7969 0.5375 13.4899 1.0575C14.1362 1.5425 14.7469 2 16.0003 2V4.5H16Z"
                                fill="currentColor"/>
                        </svg>
                    </div>
                </div>
                <h3>Lịch sử xem</h3>
            </div>
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