import { Button } from "react-bootstrap"
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import "./Social/Social.scss"

export const ToggleFontSize = ({ currentFontSize, handleChangeFontSize }:
    { currentFontSize: number, handleChangeFontSize: (fontSize: number) => void }) => {

    const handleIncreaseFontSize = () => {
        currentFontSize = currentFontSize + 2 >= 30 ? 30 : currentFontSize + 2;
        handleChangeFontSize(currentFontSize);
    }

    const handleDecreaseFontSize = () => {
        currentFontSize = currentFontSize - 2 <= 12 ? 12 : currentFontSize -= 2;
        handleChangeFontSize(currentFontSize);
    }


    return (
        <section id="toggleFontSize">
            <Button onClick={handleIncreaseFontSize} className="font-size-button">
                <FaCirclePlus />
            </Button>
            <Button onClick={handleDecreaseFontSize} className="font-size-button">
                <FaCircleMinus />
            </Button>
        </section>
    )

}