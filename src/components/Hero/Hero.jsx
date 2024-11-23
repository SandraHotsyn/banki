import css from "./Hero.module.css";
import hero_image from "../assets/Noitra.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { FaGift } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={css.hero}>
      <div className={css.heroLeft}>
        <h2>Новинка</h2>
        <div>
          <div className={css.handIcon}>
            <p>Акційний сет «Нойтра»</p>
            <FaGift size={60} color="red" />
          </div>
          <p>500 грн (1 кг, 32 шт)</p>
          <p>див усі ролли</p>
        </div>
        <div className={css.heroLatestButton}>
          <div>Latest</div>
          <BsArrowRightShort size={30} />
        </div>
      </div>
      <div className={css.heroRight}>
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
