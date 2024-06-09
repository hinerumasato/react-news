import SliderItem from "./SliderItem";
import Slider from "react-slick";
import { SliderContainerProps } from "../../../interfaces/ISliderContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/SliderContainer.css";

const SliderContainer: React.FC<SliderContainerProps> = ({ content }) => {
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

  return (
    <Slider {...settings}>
      {content.map(
        ({ title, postImg, postDate, authorImg, authorName }, index) => {
          return (
            <SliderItem
              key={index}
              title={title}
              postImg={postImg}
              postDate={postDate}
              authorImg={authorImg}
              authorName={authorName}
            />
          );
        }
      )}
    </Slider>
  );
};

export default SliderContainer;
