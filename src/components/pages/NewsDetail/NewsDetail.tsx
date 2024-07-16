import { Waves } from "@/components/vendors";
import { Application } from "@/constants/application";
import { useCrawlData, useParseFeed } from "@/hooks";
import { useFeeds } from "@/hooks/useFeeds";
import INewsItem from "@/interfaces/INewsItem";
import { Urls } from "@/utils";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './NewsDetail.scss';
import { Social } from "./Social/Social";
import { SummaryNews } from "./SummaryNews";
import TtsAudioMemo from "./TtsAudio";

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

const extractTextContent = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}

export const NewsDetail = () => {
    const { type, slug } = useParams();
    const url = `${Application.RSS_FEED_URL}/${type}/${slug}`;
    const data = useCrawlData(url);
    const feedDetail = useParseFeed(data);
    const textType = Urls.toCategoryType(type);
    const articleRef = useRef<HTMLElement>();
    const [relatedFeeds, setRelatedFeeds] = useState<Array<INewsItem>>();
    const feeds = useFeeds(`${type}.rss`, 6);
    const [ttsContent, setTtsContent] = useState<string>("");
    const [newsContent, setNewsContent] = useState<string>("");

    useEffect(() => {
        if (feedDetail?.title)
            document.title = feedDetail.title;
        if (feedDetail?.content)
            lazyLoading();

    }, [feedDetail?.content, feedDetail?.title])

    useEffect(() => {
        feeds.then(data => setRelatedFeeds(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [url]);

    useEffect(() => {
        if (feedDetail?.title && feedDetail?.sapo && feedDetail?.content)
            setTtsContent(extractTextContent(
                feedDetail?.title as string + " " +
                feedDetail?.sapo as string + " " +
                feedDetail?.content as string));

        setNewsContent(extractTextContent(feedDetail?.content as string));
    }, [feedDetail?.title, feedDetail?.sapo, feedDetail?.content])

    return (
        <section id="feedDetails">
            <article ref={articleRef as LegacyRef<HTMLElement>} id="newsDetail">
                <Container style={{ width: '900px', maxWidth: '100%' }}>
                    <Row>
                        <Col md={1}>
                            <div className="socials-share-wrapper">
                                <Social url={url} />
                            </div>
                        </Col>
                        <Col md={11}>
                            {textType && <p className="text-secondary pt-3">{textType}</p>}
                            <h1 className="fw-bold">{feedDetail?.title}</h1>
                            <div className="d-flex align-items-center gap-2">
                                <img width={30} height={30} className="rounded rounded-circle" src={feedDetail?.authorAvatar} alt={feedDetail?.authorName} />
                                <div className="d-md-flex align-items-center gap-3">
                                    <p className="m-0 fw-bold">{feedDetail?.authorName}</p>
                                    <p className="m-0 text-secondary">{feedDetail?.authorTime}</p>
                                </div>
                            </div>
                            {ttsContent && <TtsAudioMemo text={ttsContent} />}

                            {newsContent && <SummaryNews content={newsContent} />}
                            <p className="py-3" style={{ fontStyle: 'italic' }}>{feedDetail?.sapo}</p>
                            <div className="content" dangerouslySetInnerHTML={{ __html: feedDetail?.content as string }}></div>
                            <div className="related-news py-5">
                                <h2 className="fw-bold d-flex align-items-center">
                                    <Waves />
                                    Bài viết liên quan
                                </h2>
                                <Row className="row-cols-md-3">
                                    {relatedFeeds && relatedFeeds.map((item, index) => (
                                        <Col key={index} className="mt-3">
                                            <Card className="border-0 shadow">
                                                <Card.Img variant="top" src={item.newsImg} />
                                                <Card.Body>
                                                    <Card.Title className="related-news-title">{item.title}</Card.Title>
                                                    <Card.Text className="related-news-snippet">
                                                        {item.contentSnippet}
                                                    </Card.Text>
                                                    <Link to={Urls.toNewsDetailLink(item.link) as string} className="button btn-custom">Đọc thêm</Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </article>
        </section>
    )
}
