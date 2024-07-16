import { Application } from '@/constants';
import axios from 'axios';

export const useSummary = async (text: string) => {
    const formData = new FormData();
    formData.append("text", text);

    const resp = await axios.post(`${Application.API_PROXY}/summary`, formData);
    return resp.data;
}
