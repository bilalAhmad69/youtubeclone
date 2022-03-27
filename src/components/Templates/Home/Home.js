import { lazy, Suspense } from "react";
import { Header, LeftSideBar } from "../../Organism/";
const Main = lazy(() => import("../../Organism/Main/Main"));
const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <LeftSideBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Main />
        </Suspense>
      </div>
    </div>
  );
};
export default Home;
