import { MdMic } from "react-icons/md";
import SearchInput from "../../Atomic/Inputs/SearchInput/SearchInput";
import SearchButton from "../../Atomic/Buttons/SearchButton/SearchButton";
import IconButton from "../../Atomic/Buttons/IconButton/IconButton";
import "./searchField.css";
const SeacrhField = () => {
  return (
    <div className="searchFieldContainer">
      <div className="searchField">
        <SearchInput />
        <SearchButton />
      </div>
      <IconButton className="topHeadingBtn">
        <MdMic className="topHeadingIcon" />
      </IconButton>
    </div>
  );
};
export default SeacrhField;
