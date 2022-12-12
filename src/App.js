import { Routes, Route } from "react-router-dom";
import Home, { Navigation } from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/home" element={<Home />}>
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
