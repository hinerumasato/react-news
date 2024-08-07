/**
 * Định nghĩa một giao diện IRoute để đại diện cho một đường dẫn trong ứng dụng React.
 */
import { ILayout } from "./ILayout";

export interface IRoute {
    /**
     * Đường dẫn của route.
     */
    path: string;
    /**
     * Component được hiển thị khi route được truy cập.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: React.ComponentType<any>;
    /**
     * Layout được sử dụng để bao bọc component.
     */
    Layout: ILayout;
    /**
     * Tiêu đề của trang.
     */
    pageTitle?: string;
}