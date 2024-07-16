import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import './Social.scss';

export const Social = ({ url }: { url: string }) => {
    return (
        <div className="share-buttons">
            <TwitterShareButton url={url}>
                <div className="share-button">
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            share on twitter
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>
            </TwitterShareButton>

            <FacebookShareButton url={url}>
                <div className="share-button">
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            share on facebook
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                </div>
            </FacebookShareButton>

            <LinkedinShareButton url={url}>
                <div className="share-button">
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            share on linkedin
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </LinkedinShareButton>

            <EmailShareButton url={url}>
                <div className="share-button">
                    <div className="share-button-secondary">
                        <div className="share-button-secondary-content">
                            share on email
                        </div>
                    </div>
                    <div className="share-button-primary">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
            </EmailShareButton>
        </div>
    )
}