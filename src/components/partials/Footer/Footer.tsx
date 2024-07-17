import { Logo, Waves } from '@/components/vendors';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { useFeeds } from '@/hooks/useFeeds';
import { FooterFeed } from './FooterFeed';
import React, { useEffect, useState } from 'react';
import INewsItem from "@/interfaces/INewsItem.ts";
import { Loading } from "@/components/vendors/Loading/Loading.tsx";

export const Footer = React.memo(() => {
    const [posts, setPosts] = useState<INewsItem[]>([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true);
        const getPost = async () => {
            const postData: INewsItem[] = await useFeeds('home.rss', 2);
            setPosts(postData)
            setIsLoading(false)
        }

        getPost()
    }, []);

    if (isLoading)
        return <Loading />

    return (
        <footer className='py-5'>
            <Container>
                <Row className='g-5'>
                    <Col lg={4} md={6} sm={12}>
                        <Logo height={50} width={200} />
                        <p>Trang tin tức, luôn cập nhật các <strong>tin mới nhất</strong> về tình hình trong nước và quốc tế</p>
                        <p>Bạn muốn chia sẻ tin tức với chúng tôi? Liên lạc qua email: <strong>estudiopatagon.com</strong></p>
                        <form className='d-flex align-items-center'>
                            <input className='form-control d-inline-block' type="email" placeholder="Nhập email của bạn" />
                            <button className='btn-custom' style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} type="submit">Gửi</button>
                        </form>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <div className="footer-section-header">
                            <Waves />
                            <h3>Liên kết</h3>
                        </div>
                        <ul className='list-unstyled footer-link-list'>
                            <li><Link to='/'>Trang chủ</Link></li>
                            <li><Link to='/news'>Tin tức</Link></li>
                            <li><Link to='/contact'>Liên hệ</Link></li>
                            <li><Link to='/news/history'>Bài viết đã xem</Link></li>
                        </ul>
                    </Col>

                    <Col lg={4} md={12} sm={12}>
                        <div className="footer-section-header">
                            <Waves />
                            <h3>Bài viết mới nhất</h3>
                        </div>
                        {posts.map((post, index) => (
                            <FooterFeed key={index} post={post} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
})
