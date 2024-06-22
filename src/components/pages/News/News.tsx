import CategoryBar from "@/components/pages/News/CategoryBar.tsx";
import { Waves } from "@/components/vendors";
import NewsItem from "@/components/vendors/News/NewsItem.tsx";
import { useTitle } from "@/hooks";
import { useState } from "react";
import { Container } from "react-bootstrap";

export const News = () => {
    const [newsData] = useState([])

    useTitle('Tin tức');

    return (
        <Container>
            <CategoryBar />
            <div className="d-flex align-items-center">
                <Waves />
                <h3>Latest Articles</h3>
            </div>
            <ul>
                {newsData.map(({ title, postImg, authorName, authorImg, postDate, description, countComment }, index) => {
                    return <NewsItem key={index
                    } title={title} postImg={postImg} authorName={authorName} authorImg={authorImg}
                        postDate={postDate} description={description} countComment={countComment} />
                })}
            </ul>
        </Container>
    )
}
