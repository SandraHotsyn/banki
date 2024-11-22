// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import css from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";
import Category from "../../pages/Category/Category";
import Product from "../../pages/Product/Product";
import Cart from "../../pages/Cart/Cart";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragons" element={<Category category="dragon" />} />
          <Route
            path="/california"
            element={<Category category="california" />}
          />
          <Route
            path="/philadelphia"
            element={<Category category="philadelphia" />}
          />
          <Route path="/maki" element={<Category category="maki" />} />
          <Route path="/futomaki" element={<Category category="futomaki" />} />
          <Route path="/nagiri" element={<Category category="nagiri" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
