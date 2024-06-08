import { Container } from "react-bootstrap";
import "../assets/css/SubscribeNews.css";

const SubscribeNews = () => {
  return (
    <Container className="position-relative py-5">
      <div className="subscribe-news__container">
        <div className="subscribe-news__title">
          <h2 className="py-3">Subscribe to our newsletter</h2>
        </div>
        <div className="subscribe-news__form d-flex flex-column">
          <p className="text-center">Subscribe to our email newsletter to get the latest posts delivered right to your email.</p>
          <form action="" className="input-group subscribe-form">
            <input className="form-control border-0" type="email" placeholder="Enter your email address" />
            <button type="submit" className="btn btn-sm wave-button" role="button">Subscribe</button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default SubscribeNews;
