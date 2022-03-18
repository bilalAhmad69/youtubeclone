import { HiOutlineSearch } from "react-icons/hi";
import "./searchButton.css";
const SearchBtn = () => {
  return (
    <button className="searchBtn">
      <HiOutlineSearch className="searchIcon" />
    </button>
  );
};
export default SearchBtn;
