import INewsItem from "@/interfaces/INewsItem.ts";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import {NewsItemContainer} from "@/components/vendors/News/NewsItemContainer.tsx";

export const HistoryNews = () => {
    // Lấy dữ liệu từ local storage khi khởi tạo state
    const [viewedNews] = useState<INewsItem[]>(() => {
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
            <Container className="container">
                <NewsItemContainer data={viewedNews} containerTitle="Lịch sử tin tức"/>
            </Container>
        </div>
    );

}