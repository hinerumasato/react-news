import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

const TtsAudio = ({ text }: { text: string }) => {
    const [audioSrc, setAudioSrc] = useState<string>("");

    useEffect(() => {

        const fetchData = async () => {
            const formData = new FormData();
            formData.append("text", text);

            const resp = await axios.post('http://localhost:8000/tts', formData);
            setAudioSrc(resp.data);
        }

        fetchData();
    }, [text]);

    return (
        <Container className="tts-audio">
            <audio src={`data:audio/mp3;base64,${audioSrc}`} controls />
        </Container>
    )
}

const TtsAudioMemo = React.memo(TtsAudio);
export default TtsAudioMemo;

