import { MdMic } from "react-icons/md";
import SearchInput from "../../Atomic/Inputs/SearchInput/SearchInput";
import SearchButton from "../../Atomic/Buttons/SearchButton/SearchButton";
import IconButton from "../../Atomic/Buttons/IconButton/IconButton";
import "./searchField.css";
import { useDispatch } from "react-redux";

const SeacrhField = () => {
  const dispatch = useDispatch();

  return (
    <div className="searchFieldContainer">
      <div className="searchField">
        <SearchInput
          onChange={(e) => {
            let word = e.target.value.toLowerCase();
            if (word.length >= 3) dispatch({ type: "SEARCH", payload: word });
          }}
        />
        <SearchButton />
      </div>
      <IconButton className="topHeadingBtn">
        <MdMic className="topHeadingIcon" />
      </IconButton>
    </div>
  );
};
export default SeacrhField;
