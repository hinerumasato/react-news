import { Container } from "react-bootstrap";
import "@/components/assets/css/WaveBackground.css";

const WaveBackground = () => {
    return (
        <Container className="position-absolute top-0 start-0" fluid>
            <div className="container-fluid wave-container" id="wave-container-up"></div>
            <div className="container-fluid wave-container" id="wave-container-bottom"></div>
        </Container>
    );

}

export default WaveBackground;