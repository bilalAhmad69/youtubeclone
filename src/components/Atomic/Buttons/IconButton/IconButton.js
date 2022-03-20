import "./iconButton.css";
const IconButton = (props) => {
  const { onClick, className, children } = props;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
export default IconButton;
