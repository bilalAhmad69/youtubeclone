import LeftHeader from "../../Molecules/LeftHeader/LeftHeader";
import SearchField from "../../Molecules/SearchField/SearchField";
import RightHeader from "../../Molecules/RightHeader/RightHeader";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <LeftHeader />
      <SearchField />
      <RightHeader />
    </header>
  );
};
export default Header;
