import { useContext } from "react";
import "./searchInput.css";
const SearchInput = (props) => {
  return (
    <input
      className="searchInput"
      type="text"
      placeholder="Search"
      value={props.value}
      onChange={props.onChange}
    />
  );
};
export default SearchInput;
