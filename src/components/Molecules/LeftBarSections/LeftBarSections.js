import { Link } from "react-router-dom";
import { IconButton, TypoGraphy, SectionDivider } from "../../Atomic/";
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
