export class RssService {
    async get(url: string): Promise<string> {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
}