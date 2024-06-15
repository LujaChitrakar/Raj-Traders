import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./components/FrameComponent";
import Navbar from "./components/Navbar";

function App() {
  return (
    // <Navbar />
    <Routes>
      <Route path="/" element={<FrameComponent />} />
    </Routes>
  );
}
export default App;
