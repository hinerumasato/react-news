import { Master } from "../components/layouts/Master";
import { Home } from "../components/pages/Home";
import { IRoute } from "../interfaces";

export const pageRoutes: IRoute[] = [
    {
        path: "/",
        Component: Home,
        Layout: Master,
        pageTitle: "Trang chủ",
    }
];