import { Library, Header, LeftSideBar } from "../../Organism";
const LibraryTemplate = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <LeftSideBar />
        <Library />;
      </div>
    </>
  );
};
export default LibraryTemplate;
