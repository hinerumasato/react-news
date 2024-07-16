import "@/assets/css/CategoryBar.scss";
import { CategoryBarButton } from "@/components/vendors/Buttons/CategoryBarButton";
import { rssCategories } from "@/constants";
import {useEffect, useState} from "react";

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
        <div className="navbar-container" >
            <div className="navbar-wrapper">
                <div className="navbar category-bar">
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
                </div>
            </div>
        </div>
    )
}