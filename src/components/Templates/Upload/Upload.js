import Header from "../../Organism/Header/Header";
import LeftSideBar from "../../Organism/LeftSideBar/LeftSideBars";
import Form from "../../Molecules/Form/Form";
const Upload = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <LeftSideBar />
        <Form />
      </div>
    </div>
  );
};
export default Upload;
