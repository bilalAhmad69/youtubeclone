import "./avatar.css";
const Avatar = (props) => {
  const { onCLick, image } = props;
  return <img onClick={onCLick} className="avatar" src={image} alt="B" />;
};
export default Avatar;
