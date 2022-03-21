import { Header, LeftSideBar, Main } from "../../Organism/";
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
