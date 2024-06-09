import { Container } from "react-bootstrap"
import WaveBackground from "./WaveBackground"
import SubscribeNews from "@/components/partials/SubscribeNews"
import PaginatePage from "@/components/partials/PaginatePage"
import { useState } from "react"

export const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    }

    return (
        <Container>
            <WaveBackground />
            {/* <SliderContainer /> */}
            <SubscribeNews />
            <PaginatePage currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
        </Container>
    )
}
