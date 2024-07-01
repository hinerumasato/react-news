/**
 * Giao diện ILayout đại diện cho một thành phần React chức năng (functional component) có cấu trúc layout.
 * @type {React.ReactNode} children Kiểu dữ liệu của các thành phần con (children) được truyền vào.
 */
export interface ILayout extends React.FC<{children?: React.ReactNode}> {}