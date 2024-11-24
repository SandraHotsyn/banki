import css from "./Navbar.module.css";
import logo from "../assets/logo.png";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className={css.navbar}>
      <div className={css.navLogo}>
        <img src={logo} alt="logo" />
        <p>SHUSHI Bankai</p>
      </div>
      <ul className={css.navMenu}>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Головна
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("dragons");
          }}
        >
          <Link to="/dragons" style={{ textDecoration: "none" }}>
            Дракони
          </Link>
          {menu === "dragons" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("california");
          }}
        >
          <Link to="/california" style={{ textDecoration: "none" }}>
            Каліфорнія
          </Link>
          {menu === "california" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("philadelphia");
          }}
        >
          <Link to="/philadelphia" style={{ textDecoration: "none" }}>
            Філадельфія
          </Link>
          {menu === "philadelphia" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("maki");
          }}
        >
          {" "}
          <Link to="/maki" style={{ textDecoration: "none" }}>
            Макі
          </Link>
          {menu === "maki" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("futomaki");
          }}
        >
          <Link to="/futomaki" style={{ textDecoration: "none" }}>
            Футомакі
          </Link>
          {menu === "futomaki" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("nagiri");
          }}
        >
          <Link to="/nagiri" style={{ textDecoration: "none" }}>
            Наґірі
          </Link>
          {menu === "nagiri" ? <hr /> : <></>}
        </li>
      </ul>
      <div className={css.navLoginCart}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button>Увійти</button>
        </Link>
        <Link to="/cart" className={css.links}>
          <BsCart4 size={40} />
        </Link>
        <div className={css.navCartCount}>0</div>
      </div>
    </div>
  );
};

export default Navbar;
