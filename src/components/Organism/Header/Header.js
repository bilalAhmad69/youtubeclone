import { LeftHeader, SearchField, RightHeader } from "../../Molecules/";

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
