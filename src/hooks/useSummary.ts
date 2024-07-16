import axios from 'axios';

export const useSummary = async (text: string) => {
    const formData = new FormData();
    formData.append("text", text);

    const resp = await axios.post('http://localhost:8000/summary', formData);
    return resp.data;
}
