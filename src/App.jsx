import { Route, Routes } from "react-router-dom";
import Home from "./HomePage.jsx";
import NotFoundPage from "./NotFoundOPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFoundPage/>} />
    </Routes>
  );
}

export default App;
