import {SliderItem} from "./SliderItem/SliderItem.tsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/components/pages/Home/SliderContainer/SliderContainer.scss";
import INewsItem from "@/interfaces/INewsItem";
import {useViewedNews} from "@/hooks/useViewedNews.ts";
import {useNavigate} from "react-router-dom";
import {Urls} from "@/utils"

export const SliderContainer = ({content}: {
    content: INewsItem[];
}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const {handleStorageNews} = useViewedNews();
    const navigate = useNavigate();

    const handleClick = (post: INewsItem) => {
        handleStorageNews(post)
        const newsDetailLink = Urls.toNewsDetailLink(post.link);

        if (newsDetailLink)
            navigate(newsDetailLink);
    };

    return (
        <Slider {...settings}>
            {content.map(
                (post, index) => {
                    return (
                        <SliderItem
                            key={index}
                            post={post}
                            onClick={() => handleClick(post)}
                        />
                    );
                }
            )}
        </Slider>
    );
};


