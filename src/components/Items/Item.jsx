import css from "./Item.module.css";
import { TbCurrencyHryvnia } from "react-icons/tb";

const Item = (props) => {
  return (
    <div className={css.item}>
      <img src={props.image} alt="" />
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
