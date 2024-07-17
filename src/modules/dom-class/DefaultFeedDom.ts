import { AFeedDom } from "./AFeed";

export class DefaultFeedDom extends AFeedDom {
    public getTitle(): string {
        return '.title-page.detail';
    }
    public getAuthorAvatar(): string {
        return '.author-avatar img';
    }
    public getAuthorName(): string {
        return '.author-name b';
    }
    public getAuthorTime(): string {
        return '.author-time';
    }
    public getSapo(): string {
        return '.singular-sapo';
    }
    public getContent(): string {
        return '.singular-content';
    }

}