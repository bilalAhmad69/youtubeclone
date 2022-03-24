import { ChipsBar, VideoCard } from "../../Molecules/";

const Main = () => {
  return (
    <div>
      <ChipsBar />
      <VideoCard
        idth="300"
        height="160"
        layout="rows"
        metaData="showAvatar"
        card="flex-col"
      />
    </div>
  );
};
export default Main;
