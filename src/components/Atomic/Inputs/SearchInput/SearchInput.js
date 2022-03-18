import "./searchInput.css";
const SearchInput = (props) => {
  return (
    <input
      className="searchInput"
      type="text"
      placeholder="Search"
      onChange={props.onChange}
      value={props.value}
    />
  );
};
export default SearchInput;
