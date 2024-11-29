import css from "./Navbar.module.css";
import logo from "../assets/logo.png";
import { BsCart4 } from "react-icons/bs";
import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HomeContext } from "../../context/HomeContext"; // Підключіть HomeContext
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(HomeContext); // Отримайте функцію для підрахунку товарів
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("visible");
      e.target.classList.toggle("open");
    }
  };

  return (
    <div className={css.navbar}>
      <div className={css.navLogo}>
        <img src={logo} alt="logo" />
        <p>SHUSHI Bankai</p>
      </div>
      <IoIosArrowDropdownCircle
        size={50}
        className={css.dropDown}
        onClick={dropdown_toggle}
      />
      <ul ref={menuRef} className={css.navMenu}>
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
        <div className={css.navCartCount}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
