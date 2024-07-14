import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import {WaveBackground} from "@/components/pages/Home/WaveBackground.tsx";
import React from "react";
import "@/assets/css/About.scss";

export const About: React.FC = () => {
    return (
        <Container className="py-5">
            <Card className="card-one text-center mb-5 z-3">
                <Card.Body>
                    <Card.Title className="fs-2">Giới thiệu</Card.Title>
                    <Card.Text className="fs-4 fw-light">
                        Chào mừng bạn đến với trang tin tức của chúng tôi. Đây là nguồn tin tức đáng tin cậy, cung cấp
                        thông tin nhanh chóng và chính xác về các sự kiện diễn ra trên khắp Việt Nam và thế giới.
                        Chúng tôi cam kết mang đến cho bạn những bản tin chất lượng, bao quát nhiều lĩnh vực như chính
                        trị, kinh tế, xã hội, văn hóa, giải trí, thể thao và công nghệ.
                        Tại đây bạn có thể đọc và chia sẻ những điều mà bạn quan tâm và giúp bạn có cái nhìn toàn diện
                        và khách quan hơn về thế giới xung quanh.
                        Hãy đồng hành cùng trang web tin tức của chúng tôi để cập nhật những tin tức mới nhất, khám phá
                        những câu chuyện hấp dẫn và tham gia vào cộng đồng yêu thích thông tin!
                    </Card.Text>
                </Card.Body>
            </Card>

            <h2 className=" text-center">Thông tin thành viên</h2>
            <Row className="my-5">
                <Col md={4}>
                    <Card className="z-3 rounded-3 card-one">
                        <img src="src/components/pages/About/img11.webp"/>
                        <Card.Body>
                            <Card.Title className="text-center">TRẦN THẮNG LỢI</Card.Title>
                            <Card.Text>
                                Member A is responsible for the editorial content. With years of experience in
                                journalism, A ensures that our news is accurate and timely.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="z-3 card-one">
                        <img src="src/components/pages/About/img22.jpg"/>
                        <Card.Body>
                            <Card.Title className="text-center">NGUYỄN PHƯƠNG NHÃ</Card.Title>
                            <Card.Text>
                                Member B handles the technical side of our website. B is a skilled developer who ensures
                                our site runs smoothly and efficiently.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="z-3 card-one">
                        <img src="src/components/pages/About/img33.jpg"/>
                        <Card.Body>
                            <Card.Title className="text-center">LẠI THỊ BÍCH PHƯỢNG</Card.Title>
                            <Card.Text>
                                Member C is in charge of marketing and outreach. C's expertise helps us reach a wider
                                audience and engage with our readers.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <WaveBackground/>
            <Row>
                <Col md={7} className="p-4">
                    <h2>Liên hệ với chúng tôi </h2>
                    <p className="fs-5 my-4">
                        Nếu bạn có bất kỳ câu hỏi nào hãy liên hệ với chúng tôi để được giải quyết một cách tốt nhất.
                    </p>
                    <form action="" className="input-group subscribe-form w-75">
                        <input className="form-control card-one" type="email" placeholder="Nhập email của bạn"/>
                        <button type="submit" className="btn btn-sm wave-button" role="button">Gửi</button>
                    </form>
                </Col>
                <Col md={5}>
                    <img src="src/components/pages/About/img1.webp" className="img-fluid"/>
                </Col>
            </Row>
        </Container>
    );
}