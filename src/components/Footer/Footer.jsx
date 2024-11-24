import css from "./Footer.module.css";
import logo from "../assets/logo.png";
import { SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.footerLogo}>
        <img src={logo} alt="logo" />
        <p>SUSHI Bankai</p>
      </div>
      <ul className={css.footerLinks}>
        <li>Про нас</li>
        <li>Продукти</li>
        <li>Місцезнаходження</li>
        <li>Контакти</li>
        <li>Графік роботи</li>
      </ul>
      <div className={css.footerSocialIcon}>
        <div className={css.footerIconsConteiner}>
          <SlSocialInstagram size={40} />
          <SlSocialFacebook size={40} />
          <PiTelegramLogo size={40} />
        </div>
      </div>
      <div className={css.footerCopyright}>
        <hr />
        <p>Copyright @ 2024 - Всі права захищені.</p>
        <p>SH-LandingPage</p>
      </div>
    </div>
  );
};

export default Footer;
