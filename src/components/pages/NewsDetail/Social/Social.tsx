import { forwardRef } from "react";
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import './Social.scss';

export const Social = forwardRef<HTMLElement, { url: string }>((props, ref) => {
    const { url } = props;

    return (
        <section ref={ref} id="socialShare">
            <FacebookShareButton url={url}>
                <FacebookIcon round={true} size={40} />
            </FacebookShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon round={true} size={40} />
            </LinkedinShareButton>
            <TwitterShareButton url={url}>
                <TwitterIcon round={true} size={40} />
            </TwitterShareButton>
        </section>
    );
});