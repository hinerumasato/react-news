import { useEffect } from "react";
import { Accordion } from "react-bootstrap"
import { useState } from "react";
import { useSummary } from "@/hooks/index";

export const SummaryNews = ({ content }: { content: string }) => {
    const [summaryHtml, setSummaryHtml] = useState<string>("");

    useEffect(() => {
        const getSummary = async () => {
            const summary = await useSummary(content);

            let summaryHtml = summary.data;

            summaryHtml += "<p className='mt-3' style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>Powered by <strong>Gemini</strong></p>";
            setSummaryHtml(summaryHtml);
        }
        getSummary();
    }, [content])

    return (
        <Accordion className="mt-3">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Tóm tắt bài viết</Accordion.Header>
                <Accordion.Body>
                    <div dangerouslySetInnerHTML={{ __html: summaryHtml }} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
