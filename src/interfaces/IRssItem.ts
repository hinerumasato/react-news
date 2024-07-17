import ICategory from "./ICategory";

export interface IRssItem {
    title: string;
    pubDate: string;
    'dc:creator': string;
    content: string;
    link: string;
    contentSnippet: string;
    guid: string;
    categories: ICategory[];
    isoDate: string;
}