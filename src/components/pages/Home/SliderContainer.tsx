import { SliderItem } from "./SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/css/SliderContainer.scss";
import INewsItem from "@/interfaces/INewsItem";

export const SliderContainer = ({ content }: {
  content: INewsItem[];
}) => {

  console.table(content);

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

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Slider {...settings}>
      {content.map(
        ({ title, newsImg, pubDate, authorImg, authorName, link }, index) => {
          return (
            <SliderItem
              key={index}
              title={title}
              newsImg={newsImg}
              pubDate={pubDate}
              authorImg={authorImg}
              authorName={authorName}
              onClick={() => handleClick(link)}
            />
          );
        }
      )}
    </Slider>
  );
};


