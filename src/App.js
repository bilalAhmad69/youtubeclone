import { Route, Routes } from "react-router-dom";
import Home from "./components/Templates/Home/Home";
import Upload from "./components/Templates/Upload/Upload";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
};

export default App;
