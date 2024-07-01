
import { Master } from "@/components/layouts/Master";
import { Home, News } from "@/components/pages";
import { IRoute } from "@/interfaces";

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
    }
];