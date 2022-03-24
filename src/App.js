import { Route, Routes } from "react-router-dom";
import {
  Home,
  Upload,
  WatchVideo,
  LibraryTemplate,
} from "../src/components/Templates/";
import { Provider } from "react-redux";
import store from "./Store/index";
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/watch/:id" element={<WatchVideo />} />
        <Route path="/library" element={<LibraryTemplate />} />
      </Routes>
    </Provider>
  );
};

export default App;
