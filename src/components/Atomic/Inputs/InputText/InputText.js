import "./inputText.css";
const InputText = (props) => {
  const { placeholder, className, onChange, value } = props;
  return (
    <input
      type={props.type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
export default InputText;
