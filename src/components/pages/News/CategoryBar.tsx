import "@/components/assets/css/CategoryBar.css";
import { CategoryBarButton } from "@/components/vendors";
import { rssCategories } from "@/constants";
import { useState } from "react";

const CategoryBar = () => {
    const [currentRssLink, setCurrentRssLink] = useState(rssCategories[0].rss);

    return (
        <div className="category-bar">
            {rssCategories.map((category, index) => {
                return (
                    <CategoryBarButton key={index} data-link={category.rss} active={category.rss === currentRssLink} onClick={() => { setCurrentRssLink(category.rss) }}>
                        {category.name}
                    </CategoryBarButton>
                )
            })}
        </div>
    )
}

export default CategoryBar;