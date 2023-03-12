import React from "react";
import { toast } from "react-hot-toast";
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
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
  RedditIcon,
  VKIcon,
  OKIcon,
  PinterestIcon,
  LinkedinIcon,
  TumblrIcon,
  TelegramIcon,
} from "react-share";
const Share = ({ id }) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="share" className="modal-toggle" />
      <label htmlFor="share" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="flex justify-between my-3">
            <p>Share</p>
            <label htmlFor="share" className="btn btn-sm btn-ghost">
              Cancel
            </label>
          </div>

          <div className="flex overflow-auto gap-2">
            {/* Facebook */}
            <FacebookShareButton url={`${import.meta.env.VITE_APP_BASE_URL}/video/${id}`}>
              <FacebookIcon size={44} round={true} />
            </FacebookShareButton>

            {/* Twitter */}
            <TwitterShareButton url={`${import.meta.env.VITE_APP_BASE_URL}/video/${id}`}>
              <TwitterIcon size={44} round={true} />
            </TwitterShareButton>

            {/* Whatsapp */}
            <WhatsappShareButton url={`${import.meta.env.VITE_APP_BASE_URL}/video/${id}`}>
              <WhatsappIcon size={44} round={true} />
            </WhatsappShareButton>

            {/* Email */}
            <EmailShareButton url={`${import.meta.env.VITE_APP_BASE_URL}/video/${id}`}>
              <EmailIcon size={44} round={true} />
            </EmailShareButton>

            {/* Reddit */}
            <RedditShareButton url={`${import.meta.env.VITE_APP_BASE_URL}/video/${id}`}>
              <RedditIcon size={44} round={true} />
            </RedditShareButton>

            {/* VK */}
            <VKShareButton url={`${import.meta.env.VITE_APP_BASE_URL}/video/${id}`}>
              <VKIcon size={44} round={true} />
            </VKShareButton>

            {/* OK */}
            <OKShareButton url={`${import.meta.env.VITE_APP_BASE_URL}/video/${id}`}>
              <OKIcon size={44} round={true} />
            </OKShareButton>

            {/* Pinterest */}
            <PinterestShareButton url={`${import.meta.env.VITE_APP_BASE_URL}/video/${id}`}>
              <PinterestIcon size={44} round={true} />
            </PinterestShareButton>

            {/* Blogger */}
            <LinkedinShareButton url={`${import.meta.env.VITE_APP_BASE_URL}/video/${id}`}>
              <LinkedinIcon size={44} round={true} />
            </LinkedinShareButton>

            {/* Tumblr */}
            <TumblrShareButton url={`${import.meta.env.VITE_APP_BASE_URL}/video/${id}`}>
              <TumblrIcon size={44} round={true} />
            </TumblrShareButton>

            {/* Telegram*/}
            <TelegramShareButton url={`${import.meta.env.VITE_APP_BASE_URL}/video/${id}`}>
              <TelegramIcon size={44} round={true} />
            </TelegramShareButton>
          </div>

          <div className="py-4 flex items-center w-full justify-center">
            <div className="flex items-center gap-2">
              <p className="hidden md:block">{`${
                import.meta.env.VITE_APP_BASE_URL
              }/video/${id.slice(0, 15)}${"..."}`}</p>
              <p className="md:hidden">{`${
                import.meta.env.VITE_APP_BASE_URL
              }/vi...`}</p>
              <button
                className="btn btn-warning btn-sm rounded-full"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${import.meta.env.VITE_APP_BASE_URL}/video/${id}`
                  ),
                    toast.success("Copied");
                }}
              >
                Copy
              </button>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default Share;
