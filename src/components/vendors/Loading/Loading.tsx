import {Container} from "react-bootstrap";
import {ClipLoader} from "react-spinners";
import "./Loading.scss"

export const Loading = () => {
    return (
        <Container className="loading-background" fluid>
            <ClipLoader
                loading={true}
                color={"#f03977"}
                size={150}
                aria-label={"Loading..."}
            />
        </Container>
    )
}



