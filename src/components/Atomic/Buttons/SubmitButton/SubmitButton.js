import "./submitButton.css";
const SubmitButton = (props) => {
  const { onClick, text } = props;
  return (
    <button className="formBtn" onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
