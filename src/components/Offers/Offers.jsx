import css from "./Offers.module.css";
import exclusive from "../assets/black_dragon.jpg";

const Offers = () => {
  return (
    <div className={css.offers}>
      <div className={css.offersLeft}>
        <h2>Ексклюзивно</h2>
        <h2>для тебе</h2>
        <p>Лише краще</p>
        <button>Тисни тут</button>
      </div>
      <div className={css.offersRight}>
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offers;
