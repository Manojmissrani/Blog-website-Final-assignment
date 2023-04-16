import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams, useLocation } from "react-router-dom";
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
} from "react-share";

function Share() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const location = useLocation();
    const handleShow = () => setShow(true);
    let url = "https://cosmic-pika-f6c4c1.netlify.app";

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <i class="fa-sharp fa-solid fa-share"></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Share Link</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FacebookShareButton url={url + location.pathname}>
                        <FacebookIcon size={50} round={true} />
                    </FacebookShareButton>

                    <TelegramShareButton url={url + location.pathname}>
                        <TelegramIcon size={50} round={true} />
                    </TelegramShareButton>
                    
                    <InstapaperShareButton url={url + location.pathname}>
                        <InstapaperIcon size={50} round={true} />
                    </InstapaperShareButton>

                    <LinkedinShareButton url={url + location.pathname}>
                        <LinkedinIcon size={50} round={true} />
                    </LinkedinShareButton>

                    <TwitterShareButton url={url + location.pathname}>
                        <TwitterIcon size={50} round={true} />
                    </TwitterShareButton>


                    <WhatsappShareButton url={url + location.pathname}>
                        <WhatsappIcon size={50} round={true} />
                    </WhatsappShareButton>

                    <EmailShareButton url={url + location.pathname}>
                        <EmailIcon size={50} round={true} />
                    </EmailShareButton>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Share