import { AFeedDom } from "./AFeed";

export class EmagazineFeedDom extends AFeedDom {
    public getTitle(): string {
        return ".e-magazine__title";
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
        return ".e-magazine__sapo";
    }
    public getContent(): string {
        return ".e-magazine__body";
    }
}