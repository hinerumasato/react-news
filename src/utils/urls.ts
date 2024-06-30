import { rssCategories } from "@/constants";
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

    public static toCategoryType(rssSlug: string | null | undefined): string | null {
        if(!rssSlug) return null;
        if(!rssSlug.endsWith('.rss'))
            rssSlug += '.rss';
        const filtered = rssCategories.filter(category => category.rss === rssSlug);
        return filtered.length > 0 ? filtered[0].name : null;
    }
}