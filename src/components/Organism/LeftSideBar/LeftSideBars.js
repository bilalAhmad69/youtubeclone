import { Link } from "react-router-dom";
import LeftSection from "../../Molecules/LeftBarSections/LeftBarSections";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { TiMediaPlayOutline } from "react-icons/ti";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

import { GrHistory } from "react-icons/gr";
import { RiVideoLine } from "react-icons/ri";
const topitems = [
  {
    text: <Link to="/"> "Home"</Link>,
    icon: (
      <Link to="/">
        <MdHomeFilled className="topHeadingIcon" />
      </Link>
    ),
  },
  { text: "Explore", icon: <MdOutlineExplore className="topHeadingIcon" /> },
  { text: "Shorts", icon: <TiMediaPlayOutline className="topHeadingIcon" /> },
  { text: "Explore", icon: <MdOutlineExplore className="topHeadingIcon" /> },
  {
    text: "Subscriptions",
    icon: <MdOutlineSubscriptions className="topHeadingIcon" />,
  },
];
const midItems = [
  {
    text: "Library",
    icon: <MdOutlineVideoLibrary className="topHeadingIcon" />,
  },
  { text: "History", icon: <GrHistory className="topHeadingIcon" /> },
  {
    text: "Your Videos",
    icon: <RiVideoLine className="topHeadingIcon" />,
  },
  {
    text: "Wacth Later",
    icon: <MdWatchLater className="topHeadingIcon" />,
  },
  {
    text: "Show More",
    icon: <MdExpandMore className="topHeadingIcon" />,
  },
];
function sendEvent() {
  console.log("Hello");
}
const LeftSideBar = () => {
  return (
    <div>
      <LeftSection items={topitems} />
      <LeftSection items={midItems} onClick={sendEvent} />
    </div>
  );
};
export default LeftSideBar;
