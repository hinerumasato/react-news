
import { IRssItem } from '@/interfaces/IRssItem';
import { parseISO, format } from 'date-fns';
import ICategory from '@/interfaces/ICategory';
import INewsItem from "@/interfaces/INewsItem";
import { Application } from '@/constants';

export const useFeeds = async (rss: string, numberOfItems: number = 0): Promise<INewsItem[]> => {
    const API_URL = `${Application.API_PROXY}/rss/`;
    const response = await fetch(API_URL + rss, { method: 'GET' });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const respJson = await response.json();
    if (!respJson.data) {
        throw new Error('Data is missing in the response');
    }
    const data = respJson.data;

    const limitedItems = (numberOfItems > 0) ? data.slice(0, numberOfItems) : data;

    const updatedItems = limitedItems.map((item: IRssItem) => {
        const title = item.title;
        const pubDate = format(parseISO(item.isoDate), 'dd/MM/yyyy HH:mm');
        const link = item.link;
        const contentSnippet = item.contentSnippet;

        const authorName = item['dc:creator'];
        const authorImg = 'https://chobao.vn/wp-content/uploads/2023/02/Bao-Dan-tri.jpg';

        const imgRegex = /<img.*?src='(.*?)'.*?>/;
        const match = item.content.match(imgRegex);
        const newsImg = match ? match[1] : '';

        const newsCategories = (item.categories as ICategory[]).map((category: ICategory) => {
            return category._;
        }).join(', ');

        return { title, pubDate, authorName, authorImg, newsImg, newsCategories, contentSnippet, link };
    })

    return updatedItems;
}
