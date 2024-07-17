import { AFeedDom } from "./AFeed";
import { DefaultFeedDom } from "./DefaultFeedDom";
import { EmagazineFeedDom } from "./EmagazineFeedDom";
import { FeedType } from "@/enums/feedType";

export class FeedDomFactory {
    public static createFeedDom(type: FeedType): AFeedDom {
        switch (type) {
            case FeedType.DEFAULT:
                return new DefaultFeedDom();
            case FeedType.EMAGAZINE:
                return new EmagazineFeedDom();
        }
    }
}