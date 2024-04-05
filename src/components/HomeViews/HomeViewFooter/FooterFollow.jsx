import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterFollow = () => {
  return (
    <div className="flex-col flex-1">
      <h2 className="font-f1 font-bold">FOLLOW F1</h2>
      <div className="flex">
        <div className="py-2 space-x-4">
          <a
            href="https://www.facebook.com/Formula1"
            className="hover:text-candy-apple"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/F1"
            className="hover:text-candy-apple"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/user/Formula1"
            className="hover:text-candy-apple"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterFollow;
