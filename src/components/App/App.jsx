// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import css from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";
import Category from "../../pages/Category/Category";
import Product from "../../pages/Product/Product";
import Cart from "../../pages/Cart/Cart";
import Footer from "../../components/Footer/Footer";

import banner_dragons from "../assets/NewYear.png";
import banner_california from "../assets/gift.jpg";
import banner_philadelphia from "../assets/familyChristmas.png";
import banner_maki from "../assets/rainbow.jpg";
import banner_futomaki from "../assets/Compliment.jpg";
import banner_nagiri from "../assets/shares.jpg";
import LoginSignup from "../../pages/LoginSignup/LoginSignup";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dragons"
            element={<Category banner={banner_dragons} category="dragons" />}
          />
          <Route
            path="/california"
            element={
              <Category banner={banner_california} category="california" />
            }
          />
          <Route
            path="/philadelphia"
            element={
              <Category banner={banner_philadelphia} category="philadelphia" />
            }
          />
          <Route
            path="/maki"
            element={<Category banner={banner_maki} category="maki" />}
          />
          <Route
            path="/futomaki"
            element={<Category banner={banner_futomaki} category="futomaki" />}
          />
          <Route
            path="/nagiri"
            element={<Category banner={banner_nagiri} category="nagiri" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
