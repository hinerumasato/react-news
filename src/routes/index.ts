
import { Master } from "@/components/layouts/Master";
import { Home, News, NewsDetail } from "@/components/pages";
import { IRoute } from "@/interfaces";
import {HistoryNews} from "@/components/pages/History/HistoryNews.tsx";
import {SearchResult} from "@/components/pages/Search/SearchResult.tsx";
import {About} from "@/components/pages/About/About.tsx";

export const pageRoutes: IRoute[] = [
    {
        path: "/",
        Component: Home,
        Layout: Master,
        pageTitle: "Trang chủ",
    },
    {
        path: "/news",
        Component: News,
        Layout: Master,
        pageTitle: 'Tin tức'
    },
    {
        path: "/news/:type/:slug",
        Component: NewsDetail,
        Layout: Master,
    },
    {
        path: "/news/history",
        Component: HistoryNews,
        Layout: Master,
    },
    {
        path: "/search-results",
        Component: SearchResult,
        Layout: Master,
    },
    {
        path: "/about",
        Component: About,
        Layout: Master,
    }

];