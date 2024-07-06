import { Urls } from "@/utils";
import { useEffect, useState } from "react"

export const useCrawlData= (url: string) => {
    const [data, setData] = useState<string | null>(null);
    useEffect(() => {
        const path = Urls.toNewsDetailLink(url);
        if(path) {
            fetch(url)
                .then(response => response.text())
                .then(data => setData(data))
        }
    }, [url]);
    return data;
}