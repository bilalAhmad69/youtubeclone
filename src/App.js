import { Route, Routes } from "react-router-dom";
import Home from "./components/Templates/Home/Home";
import Upload from "./components/Templates/Upload/Upload";
import { Provider } from "react-redux";
import store from "./Store/index";
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Provider>
  );
};

export default App;
