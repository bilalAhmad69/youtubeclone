import { Route, Routes } from "react-router-dom";
import { Home, Upload } from "../src/components/Templates/";
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
