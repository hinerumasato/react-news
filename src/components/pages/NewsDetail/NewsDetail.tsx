import { Application } from "@/constants/application";
import { useCrawlData, useParseFeed } from "@/hooks";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom"
import './NewsDetail.scss'
import { useEffect } from "react";
import { Urls } from "@/utils";

const lazyLoading = () => {
    const images = document.querySelectorAll('.content img');
    const config = {
        rootMargin: '50px 0px',
        threshold: 0.01
    };
    const observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                const src = img.getAttribute('data-src') || img.getAttribute('data-original') || img.getAttribute('src-set');
                if (!src) return;
                img.src = src;
                self.unobserve(entry.target);
            }
        });
    }, config);
    images.forEach(image => {
        observer.observe(image);
    });

}

export const NewsDetail = () => {

    const { type, slug } = useParams();
    const data = useCrawlData(`${Application.RSS_FEED_URL}/${type}/${slug}`);
    const feedDetail = useParseFeed(data);
    const textType = Urls.toCategoryType(type);
    console.log(textType);
    

    useEffect(() => {
        if(feedDetail?.content)
            lazyLoading();
    }, [feedDetail?.content])

    return (
        <article id="newsDetail">
            <Container style={{ width: '750px', maxWidth: '100%' }}>
                {textType && <p className="text-secondary pt-3">{textType}</p>}
                <h1 className="fw-bold">{feedDetail?.title}</h1>
                <div className="d-flex align-items-center gap-2">
                    <img width={30} height={30} className="rounded rounded-circle" src={feedDetail?.authorAvatar} alt={feedDetail?.authorName} />
                    <div className="d-md-flex align-items-center gap-3">
                        <p className="m-0 fw-bold">{feedDetail?.authorName}</p>
                        <p className="m-0 text-secondary">{feedDetail?.authorTime}</p>
                    </div>
                </div>
                <p className="py-3" style={{ fontStyle: 'italic' }}>{feedDetail?.sapo}</p>
                <div className="content" dangerouslySetInnerHTML={{ __html: feedDetail?.content as string }}></div>
            </Container>
        </article>
    )
}
