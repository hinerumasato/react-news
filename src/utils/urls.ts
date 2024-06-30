import { Application } from "@/constants/application";

export class Urls {
    public static toNewsDetailLink(rootUrl: string): string | null {
        const rssFeedUrl = Application.RSS_FEED_URL;
        if(rootUrl.startsWith(rssFeedUrl)) {
            let path = rootUrl.replace(rssFeedUrl, '/');
            if(path.startsWith('/')) path = path.substring(1);
            path = '/news' + path;
            return path;
        }
        return null;
    }
}