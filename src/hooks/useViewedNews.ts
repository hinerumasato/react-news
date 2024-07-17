import {useCallback} from "react";
import INewsItem from "@/interfaces/INewsItem.ts";

export const useViewedNews = () => {
    const handleStorageNews = useCallback((newsItem: INewsItem) => {
        // Lấy danh sách tin tức đã xem từ local storage
        const viewedNews = JSON.parse(localStorage.getItem('viewedNews') || '[]');
        // ktra tin tức hiện tại tồn tại chưa
        const isNewsViewed = viewedNews.some((newItem: INewsItem) => newItem.link === newsItem.link);
        if(!isNewsViewed)
            viewedNews.push(newsItem);

        // Lưu lại danh sách tin tức đã xem vào local storage
        localStorage.setItem('viewedNews', JSON.stringify(viewedNews))
    }, []);

    return { handleStorageNews };
};