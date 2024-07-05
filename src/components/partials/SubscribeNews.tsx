import { Container } from "react-bootstrap";
import "@/assets/css/SubscribeNews.scss";

const SubscribeNews = () => {
  return (
    <Container className="position-relative py-5">
      <div className="subscribe-news__container">
        <div className="subscribe-news__title">
          <h2 className="py-3">Đăng ký để nhận tin tức mới nhất</h2>
        </div>
        <div className="subscribe-news__form d-flex flex-column">
          <p className="text-center">Đăng ký nhận bản tin email của chúng tôi để nhận bài viết mới nhất qua email.</p>
          <form action="" className="input-group subscribe-form">
            <input className="form-control border-0" type="email" placeholder="Nhập email của bạn" />
            <button type="submit" className="btn btn-sm wave-button" role="button">Đăng ký ngay</button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default SubscribeNews;
