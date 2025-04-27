import React from "react";
import Card from "./Components/Card";
import Products from "./Components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
