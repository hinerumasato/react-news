import { Container } from "react-bootstrap";
import "@/assets/css/SliderItem.scss";
import INewsItem from "@/interfaces/INewsItem.ts";


export const SliderItem = (
  {
    post,
    onClick
  }: {
    post: INewsItem;
    onClick: () => void;
  }
) => {

  return (
    <Container onClick={onClick} className="d-flex flex-column align-items-center post_slider-item">
      <Container fluid className="img-container">
        <img alt="Post image" src={post.newsImg} />
      </Container>
      <Container fluid className="d-flex justify-content-center p-4">
        <h5
          className="post-title"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title={post.title}
        >{post.title}</h5>
      </Container>
      <Container className="d-flex justify-content-between my-2">
        <div className="flex-grow-2 d-flex justify-content-end px-3">
          <div className="img-container mx-3 author-avatar_container">
            <img alt="Author avatar" src={post.authorImg} />
          </div>
          <div>
            <p
              className="author-name"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title={post.authorName}
            >{post.authorName}</p>
          </div>
        </div>
        <div className="flex-grow-1 d-flex justify-justify-content-start px-3">
          <p className="post-date">{post.pubDate}</p>
        </div>
      </Container>
    </Container>
  );
};


