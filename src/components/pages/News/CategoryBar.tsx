import "@/assets/css/CategoryBar.scss";
import { CategoryBarButton } from "@/components/vendors/Buttons/CategoryBarButton";
import { rssCategories } from "@/constants";
import { useEffect, useState } from "react";

type category = { ['name']: string, ['rss']: string }

export const CategoryBar = (
    { onChangeCategory }: { onChangeCategory: (category: category) => void }
) => {

    const initialRssLink = localStorage.getItem('currentRssLink') || rssCategories[0].rss;
    const [currentRssLink, setCurrentRssLink] = useState(initialRssLink);

    useEffect(() => {
        localStorage.setItem('currentRssLink', currentRssLink);
    }, [currentRssLink]);

    function changeCategory(category: { ['name']: string, ['rss']: string }) {
        onChangeCategory(category)
        setCurrentRssLink(category.rss)
    }

    return (
        <div className="category-bar mt-5">
            {rssCategories.map((category, index) => {
                return (
                    <CategoryBarButton key={index} data-link={category.rss}
                        active={category.rss === currentRssLink}
                        onClick={() => {
                            changeCategory(category)
                        }}>
                        {category.name}
                    </CategoryBarButton>
                )
            })}

            {/* <select
                className="form-select"
                value={currentRssLink}
                onChange={(e) => {
                    const selectedRssLink = e.target.value;
                    const selectedCategory = rssCategories.find(category => category.rss === selectedRssLink);
                    if (selectedCategory) {
                        changeCategory(selectedCategory);
                    }
                }}
            >
                {rssCategories.map((category, index) => (
                    <option key={index} value={category.rss}>
                        {category.name}
                    </option>
                ))}
            </select> */}
        </div>
    )
}

