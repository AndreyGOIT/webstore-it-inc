import "./App.css";
import { BestSellers } from "./BestSellers";
import { Header } from "./Header";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/" element={<BestSellers />} />
      </Routes>
    </div>
  );
}

export default App;
