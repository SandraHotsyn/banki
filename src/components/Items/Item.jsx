import { Link } from "react-router-dom";
import css from "./Item.module.css";
import { TbCurrencyHryvnia } from "react-icons/tb";

const Item = (props) => {
  return (
    <div className={css.item}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className={css.itemPrices}>
        <div className={css.itemPricesNew}>
          {props.new_price} грн. | <TbCurrencyHryvnia />
        </div>
        <div className={css.itemPricesOld}>
          {props.old_price} грн. | <TbCurrencyHryvnia />
        </div>
      </div>
    </div>
  );
};

export default Item;
