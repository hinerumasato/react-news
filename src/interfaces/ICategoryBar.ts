export default interface CategoryBarProps {
    categoriesRSS: { [category: string]: string };
    onCategoryBarClick: (category: string) => void;
}