import INewsItem from "@/interfaces/INewsItem";
import { LegacyRef, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './FooterFeed.scss';

export const FooterFeed = ({ post }: { post: INewsItem }) => {

    const element = useRef<HTMLDivElement>();
    const naviage = useNavigate();
    useEffect(() => {
        if(element.current) {
            const div = element.current;
            element.current.addEventListener('click', () => {
                const link = div.getAttribute('data-to');
                if(link) {
                    if(link.startsWith('http')) {
                        window.open(link, '_blank');
                    } else naviage(link);
                }
            })
        }
    })

    return (
        <div data-to={post.link} ref={element as LegacyRef<HTMLDivElement>} className='d-flex gap-2 footer-feed-item'>
            <img src={post.newsImg} alt={post.title} style={{ height: '60px' }} />
            <div>
                <h5>{post.title}</h5>
                <p className="pubDate">{post.pubDate}</p>
            </div>
        </div>
    )
}
