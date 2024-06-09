import { Container } from "react-bootstrap"
import WaveBackground from "./WaveBackground"
import SubscribeNews from "@/components/partials/SubscribeNews"

export const Home = () => {
    return (
        <Container>
            <WaveBackground />
            {/* <SliderContainer /> */}
            <SubscribeNews />
        </Container>
    )
}
