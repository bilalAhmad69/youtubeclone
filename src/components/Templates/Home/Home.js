import Header from "../../Organism/Header/Header";
import LeftSideBar from "../../Organism/LeftSideBar/LeftSideBars";
import Main from "../../Organism/Main/Main";
const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <LeftSideBar />
        <Main />
      </div>
    </div>
  );
};
export default Home;
