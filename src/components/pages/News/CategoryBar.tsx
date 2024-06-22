import React, {useRef} from "react";
import {Button} from "react-bootstrap";
import ICategoryBar from "@/interfaces/ICategoryBar.ts"
import "@/assets/css/CategoryBar.scss"

const CategoryBar: React.FC<ICategoryBar> = ({categoriesRSS, onCategoryBarClick}) => {
    const categoryBarRef = useRef<HTMLDivElement | null>(null)

    return (
        <div ref={categoryBarRef} className="category-bar">
                {Object.keys(categoriesRSS).map((category) => {
                    return (
                        <Button key={category} variant="outline-secondary" className="button-category" onClick={() => onCategoryBarClick(category)}>
                            {category}
                        </Button>
                    )
                })
                }
        </div>
    )
}

export default CategoryBar;