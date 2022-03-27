import { YoutubeLogo, IconButton } from "../../Atomic/";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./leftHeader.css";

const LeftHeader = () => {
  return (
    <div className="containerLeftHeader">
      <IconButton className="topHeadingBtn bgnone">
        <AiOutlineMenu className="topHeadingIcon" />
      </IconButton>

      <Link to="/">
        <YoutubeLogo />
      </Link>
    </div>
  );
};
export default LeftHeader;
