import React from "react";
import {SearchResultsProps} from "@/interfaces/SearchResultsProps.ts";
import {useLocation} from "react-router-dom";
import {NewsItemContainer} from "@/components/vendors/News/NewsItemContainer.tsx";
import Container from "react-bootstrap/Container";

export const SearchResult:React.FC<SearchResultsProps> = () => {
    const location = useLocation();
    const results = location.state && location.state.results ? location.state.results : [];
    return(
        <Container className="container">
            {
                results.length > 0
                ?
                    <NewsItemContainer data={results} containerTitle="Kết quả tìm kiếm"/>
                    :
                    (
                        <NewsItemContainer data={results} containerTitle="Không tìm thấy kết quả"/>
                    )
            }
        </Container>
    )

}