
import {IRssItem} from '@/interfaces/IRssItem';
import {parseISO, format} from 'date-fns';
import ICategory from '@/interfaces/ICategory';
import INewsItem from "@/interfaces/INewsItem";

async function useFeeds(rss: string, numberOfItems: number = 8): Promise<INewsItem[]> {
    const API_URL = 'http://localhost:8000/rss/';
    const response = await fetch(API_URL + rss, {method: 'GET'});
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const respJson = await response.json();
    if (!respJson.data) {
        throw new Error('Data is missing in the response');
    }
    const data = respJson.data;

    const limitedItems = data.slice(0, numberOfItems);

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

        return {title, pubDate, authorName, authorImg, newsImg, newsCategories, contentSnippet, link};
    })

    return updatedItems;
}

export default useFeeds;