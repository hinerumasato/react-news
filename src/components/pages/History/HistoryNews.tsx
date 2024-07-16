import INewsItem from "@/interfaces/INewsItem.ts";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import {NewsItemContainer} from "@/components/vendors/News/NewsItemContainer.tsx";
import { usePaginate } from "@/hooks/usePaginate";
import { WVPagination } from "@/components/vendors/Pagination/WVPagination";

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

    const { currentPage, setCurrentPage, currentItems, totalPages } = usePaginate(viewedNews, 8);
    const handleChangePage = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Lưu state vào local storage mỗi khi nó thay đổi
    useEffect(() => {
        localStorage.setItem('viewedNews', JSON.stringify(viewedNews));
    }, [viewedNews]);

    return (
        <div>
            <Container className="container">
                <NewsItemContainer data={currentItems} containerTitle="Lịch sử tin tức"/>
                <WVPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handleChangePage} />
            </Container>
        </div>
    );

}