import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Business from "./pages/Business";
import General from "./pages/General";
import Enter from "./pages/Enter";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";

import Product from "./pages/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/business" element={<Business />} />{" "}
        <Route path="/general" element={<General />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/health" element={<Health />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sport" element={<Sports />} />
        <Route path="/tech" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
