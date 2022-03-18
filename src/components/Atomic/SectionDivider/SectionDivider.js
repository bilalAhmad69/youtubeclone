import "./sectionDivider.css";
const SectionDivider = (props) => {
  return (
    <div
      className={"line"}
      style={{ width: props.width, marginTop: props.margintop }}
    ></div>
  );
};
export default SectionDivider;
