import YoutubeLogo from "../../Atomic/Logo/YoutubeLogo";
import TopHeadingIcons from "../../Atomic/Buttons/IconButton/IconButton";
import { AiOutlineMenu } from "react-icons/ai";
import "./leftHeader.css";

const LeftHeader = () => {
  return (
    <div className="containerLeftHeader">
      <TopHeadingIcons className="topHeadingBtn bgnone">
        <AiOutlineMenu className="topHeadingIcon" />
      </TopHeadingIcons>

      <YoutubeLogo />
    </div>
  );
};
export default LeftHeader;
