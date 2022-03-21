import { Chips, SectionDivider } from "../../Atomic/";
import "./chipsBar.css";
const chipsData = [
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
      {chipsData.map((chip, index) => {
        return <Chips key={index} text={chip.text} />;
      })}

      <SectionDivider />
    </div>
  );
};
export default ChipsBar;
