import { RssService } from "./RssService"
import { configDotenv } from "dotenv";
configDotenv();

describe("Test RSS Service", () => {
    it("should return an array of RSS items", async () => {
        const service = new RssService();
        const url = process.env.API_PROXY + "/rss/home.rss";
        const actual = await service.get(url);
        expect(actual).toBeDefined();
    })

    it("should return an error object", async () => {
        const service = new RssService();
        const url = `${process.env.API_PROXY}/rss/${String(Math.random())}.rss`;
        const actual = await service.get(url);
        const expected = { error: 'RSS feed not found' };
        expect(actual).toEqual(expected);
    });
})