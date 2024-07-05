import { rssCategories } from '@/constants';
import { IHomeNews } from '@/interfaces/IHomeNews';
import { IRssItem } from '@/interfaces/IRssItem';
import { format, parseISO } from 'date-fns';
import ICategory from '@/interfaces/ICategory';
import INewsItem from '@/interfaces/INewsItem';

export const useFetchHomeFeeds = async (numberItemsPerRss = 8) => {
    const homeNews: IHomeNews[] = [];

    await Promise.all(rssCategories.map(async (category: { name: string; rss: string; }) => {
        const API_URL = 'http://localhost:8000/rss/';
        const response = await fetch(API_URL + category.rss, { method: 'GET' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const respJson = await response.json();
        if (!respJson.data) {
            throw new Error('Data is missing in the response');
        }
        const data = respJson.data;

        const limitedItems = data.slice(0, numberItemsPerRss);

        const updatedItems: INewsItem[] = limitedItems.map((item: IRssItem) => {
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

        const homeNewsObject: IHomeNews = { category: category.name, data: updatedItems };
        homeNews.push(homeNewsObject);
    }));

    return homeNews;

};
