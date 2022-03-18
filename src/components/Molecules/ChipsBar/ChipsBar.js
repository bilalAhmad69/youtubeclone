import Chips from "../../Atomic/Chips/Chips";
import SectionDivider from "../../Atomic/SectionDivider/SectionDivider";
import "./chipsBar.css";
const Data = [
  { text: "All" },
  { text: "JavaScript" },
  { text: "Internet of Things" },
  { text: "Songs" },
  { text: "Cloud Engineering" },
  { text: "PHP" },
  { text: "Comedy" },
  { text: "Memes" },
  { text: "History" },
  { text: "Techonology" },
  { text: "Movies" },
  { text: "Cricket" },
];
const ChipsBar = () => {
  return (
    <div className="chipsBarContainer">
      <SectionDivider />
      {Data.map((chip, index) => {
        return <Chips key={index} text={chip.text} />;
      })}

      <SectionDivider />
    </div>
  );
};
export default ChipsBar;
