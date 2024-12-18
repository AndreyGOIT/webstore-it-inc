import "./App.css";
import { Product } from "./Product";
import { BestSellers } from "./BestSellers";
import { Header } from "./Header";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/" element={<BestSellers />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
