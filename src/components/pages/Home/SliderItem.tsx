import { Container } from "react-bootstrap";
import "@/components/assets/css/SliderItem.css";


const SliderItem = (
  {
    title,
    pubDate,
    authorName,
    authorImg,
    newsImg
  }: {
    title: string;
    pubDate: string;
    authorName: string;
    authorImg: string;
    newsImg: string;
  }
) => {

  return (
    <Container className="d-flex flex-column align-items-center post_slider-item">
      <Container fluid className="img-container">
        <img alt="Post image" src={newsImg} />
      </Container>
      <Container fluid className="d-flex justify-content-center p-4">
        <h5
          className="post-title"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title={title}
        >{title}</h5>
      </Container>
      <Container className="d-flex justify-content-between my-2">
        <div className="flex-grow-2 d-flex justify-content-end px-3">
          <div className="img-container mx-3 author-avatar_container">
            <img alt="Author avatar" src={authorImg} />
          </div>
          <div>
            <p
              className="author-name"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title={authorName}
            >{authorName}</p>
          </div>
        </div>
        <div className="flex-grow-1 d-flex justify-justify-content-start px-3">
          <p className="post-date">{pubDate}</p>
        </div>
      </Container>
    </Container>
  );
};

export default SliderItem;
