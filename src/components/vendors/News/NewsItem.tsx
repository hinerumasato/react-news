import { Container } from "react-bootstrap";
import { BsBook } from "react-icons/bs";
import '@/assets/css/NewItem.scss';
import { Link } from "react-router-dom";
import { Urls } from "@/utils";

const NewsItem = ({ title, newsImg, authorName, authorImg, pubDate, description, categories, link }: {
    title: string;
    newsImg: string;
    authorName: string;
    authorImg: string;
    pubDate: string;
    description: string;
    categories: string;
    link: string;

}) => {
    return (
        <Container className="newsitem-content d-flex align-items-center mb-4">
            <div className="post-format-wrapper">
                <div className="post-format-img">
                    <a href="" className="format-img-link">
                        <img className="format-img" src={newsImg} alt="post img" />
                    </a>
                </div>
            </div>
            <div className="newsitem-body">
                <h5 className="newsitem-title fw-bold">{title}</h5>
                <div className="newsitem-list d-flex">
                    <a className="d-flex align-items-center author" href="">
                        <img className="author-img" src={authorImg} alt="" />
                        <span className="author-name">
                            <span>By</span>
                            {authorName}
                        </span>
                    </a>
                    <div className="newsitem-info">
                        <span className="dot"><svg viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                            d="M16 4.5C14.5867 4.5 13.8698 3.9625 13.1767 3.4425C12.5305 2.9575 11.9197 2.5 10.6667 2.5C9.41359 2.5 8.80288 2.95813 8.15634 3.4425C7.46327 3.9625 6.74667 4.5 5.33307 4.5C3.91948 4.5 3.20314 3.9625 2.51007 3.4425C1.86379 2.9575 1.25307 2.5 0 2.5V0C1.41333 0 2.12993 0.5375 2.82301 1.0575C3.46928 1.5425 4.08 2 5.33307 2C6.58614 2 7.19686 1.54188 7.84314 1.0575C8.53647 0.5375 9.25307 0 10.6667 0C12.0803 0 12.7969 0.5375 13.4899 1.0575C14.1362 1.5425 14.7469 2 16.0003 2V4.5H16Z"
                            fill="currentColor" /></svg></span>
                        {pubDate}
                    </div>
                </div>
                <div className="newsitem-desc my-2">{description}</div>
                <div className="newsitem-below mt-4 d-flex justify-content-between">
                    <Link to={Urls.toNewsDetailLink(link) as string} className="button btn-custom">Đọc thêm</Link>
                    <div className="newsitem-min-read">
                        <BsBook className="me-2 fs-5" />
                        <span className="fs-6">{categories}</span>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default NewsItem;