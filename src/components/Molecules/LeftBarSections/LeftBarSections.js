import { Link } from "react-router-dom";
import IconButton from "../../Atomic/Buttons/IconButton/IconButton";
import TypoGraphy from "../../Atomic/TypoGraphy/TypoGraphy";
import SectionDivider from "../../Atomic/SectionDivider/SectionDivider";
import "./leftBarSections.css";
const LeftSection = (props) => {
  const { items } = props;
  return (
    <div className="leftSideContainer">
      {items.map((item, index) => {
        return (
          <div className="leftSideNav" key={index}>
            <IconButton className="bgnone topHeadingBtn">
              {item.icon}
            </IconButton>
            <div className="typography">
              <TypoGraphy text={<p>{item.text}</p>} />
            </div>
          </div>
        );
      })}
      <SectionDivider width="240px" margintop="10px" />
    </div>
  );
};
export default LeftSection;
