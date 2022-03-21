import { YoutubeLogo, IconButton } from "../../Atomic/";
import { AiOutlineMenu } from "react-icons/ai";
import "./leftHeader.css";

const LeftHeader = () => {
  return (
    <div className="containerLeftHeader">
      <IconButton className="topHeadingBtn bgnone">
        <AiOutlineMenu className="topHeadingIcon" />
      </IconButton>

      <YoutubeLogo />
    </div>
  );
};
export default LeftHeader;
