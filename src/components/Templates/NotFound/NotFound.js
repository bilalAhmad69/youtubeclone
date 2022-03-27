import { Header, LeftSideBar } from "../../Organism/";
import "./notFound.css";
const NotFound = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <LeftSideBar />
        <div className="notFound">
          <h1>No Search Result</h1>
        </div>
      </div>
    </>
  );
};
export default NotFound;
