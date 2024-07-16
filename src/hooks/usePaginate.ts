import INewsItem from "@/interfaces/INewsItem";
import { useEffect, useState } from "react";

export const usePaginate = (items: Array<INewsItem>, itemsPerPage: number = 8) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentItems, setCurrentItems] = useState<Array<INewsItem>>([]);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        setTotalPages(Math.ceil(items.length / itemsPerPage));
    }, [items, itemsPerPage]);

    useEffect(() => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        setCurrentItems(items.slice(begin, end));
    }, [currentPage, items, itemsPerPage]);

    return { currentItems, currentPage, setCurrentPage, totalPages };
}