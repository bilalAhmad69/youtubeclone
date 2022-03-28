import { Route, Routes } from "react-router-dom";
import {
  Home,
  Upload,
  WatchVideo,
  LibraryTemplate,
  NotFound,
} from "../src/components/Templates/";
import { Login, SignUp } from "./components/Organism";
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/not" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default App;
