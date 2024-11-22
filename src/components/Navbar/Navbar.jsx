import css from "./Navbar.module.css";
import logo from "../assets/logo.png";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";

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
          Головна {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("dragons");
          }}
        >
          Дракони {menu === "dragons" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("california");
          }}
        >
          Каліфорнія {menu === "california" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("philadelphia");
          }}
        >
          Філадельфія {menu === "philadelphia" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("maki");
          }}
        >
          Макі {menu === "maki" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("futomaki");
          }}
        >
          Футомакі {menu === "futomaki" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("nagiri");
          }}
        >
          Наґірі {menu === "nagiri" ? <hr /> : <></>}
        </li>
      </ul>
      <div className={css.navLoginCart}>
        <button>Увійти</button>
        <BsCart4 size={40} />
        <div className={css.navCartCount}>0</div>
      </div>
    </div>
  );
};

export default Navbar;
