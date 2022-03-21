import { Header, LeftSideBar } from "../../Organism/";
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
