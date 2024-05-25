import { Container } from "react-bootstrap";

import "./SliderItem.css";

interface SliderItemProps {
  title: string;
  post_img: string;
  author_name: string;
  author_img: string;
  post_date: string;
}

const SliderItem: React.FC<SliderItemProps> = ({
  title,
  post_img,
  post_date,
  author_img,
  author_name,
}) => {
  return (
<Container className="d-flex flex-column align-items-center col-xl-3 col-lg-4 col-md-12 post_slider-item">
      <Container fluid className="img-container">
        <img alt="Post image" src={post_img} />
      </Container>
      <Container fluid className="d-flex justify-content-center p-4">
        <h5>{title}</h5>
      </Container>
      <Container className="d-flex justify-content-between my-2">
        <div className="w-100 d-flex justify-content-end px-3">
          <div className="img-container mx-3 author-avatar_container">
            <img alt="Author avatar" src={author_img} />
          </div>
          <div>
            <p className="author-name">{author_name}</p>
          </div>
        </div>
        <div className="w-100 d-flex justify-justify-content-start px-3">
          <p>{post_date}</p>
        </div>
      </Container>
    </Container>
  );
};

export default SliderItem;
