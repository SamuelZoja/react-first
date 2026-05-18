import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Football from "./pages/Football";
import Movies from "./pages/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/football" element={<Football />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}

export default App;