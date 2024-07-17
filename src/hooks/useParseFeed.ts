import { FeedType } from "@/enums/feedType";
import { IFeedDetail } from "@/interfaces";
import { FeedDomFactory } from "@/modules";

export const useParseFeed = (rawHtml: string | null): IFeedDetail | null => {
    if(!rawHtml) return null;
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, 'text/html');
    if(!doc) return null;
    const isEmagazine = doc.querySelector('body')?.classList.contains('emagazine');
    const type = isEmagazine ? FeedType.EMAGAZINE : FeedType.DEFAULT;
    const feedDom = FeedDomFactory.createFeedDom(type);
    const feedDetail: IFeedDetail = {
        title: doc.querySelector(feedDom.getTitle())?.textContent as string,
        authorAvatar: doc.querySelector(feedDom.getAuthorAvatar())?.getAttribute('src') as string,
        authorName: doc.querySelector(feedDom.getAuthorName())?.textContent as string,
        authorTime: doc.querySelector(feedDom.getAuthorTime())?.textContent as string,
        sapo: doc.querySelector(feedDom.getSapo())?.textContent as string,
        content: doc.querySelector(feedDom.getContent())?.innerHTML as string,
    }
    return feedDetail;
}