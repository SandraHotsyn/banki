import { useContext } from "react";
import css from "./CartItems.module.css";
import { HomeContext } from "../../context/HomeContext";
import { IoBagRemoveOutline } from "react-icons/io5";
import { TbCurrencyHryvnia } from "react-icons/tb";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart } = useContext(HomeContext);

  return (
    <div className={css.csrtItems}>
      <div className={css.cartItemsFormatMain}>
        <p>Продукти</p>
        <p>Назва</p>
        <p>Ціна</p>
        <p>Кількість</p>
        <p>Загальна ціна</p>
        <p>Видалити</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className={css.cartItemsFormatMain}>
                <img src={e.image} alt="" className={css.cartIconAdd} />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className={css.quantity}>{cartItems[e.id]}</button>
                <p>
                  {e.new_price * cartItems[e.id]} грн. | <TbCurrencyHryvnia />
                </p>
                <IoBagRemoveOutline
                  className={css.removeIcon}
                  size={40}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={css.cartItemsDown}>
        <div className={css.cartItemsTotal}>
          <h2>Вартість замовлення</h2>
          <div>
            <div className={css.cartItemsTotalItem}>
              <p>Всього:</p>
              <p>
                {0} грн. | <TbCurrencyHryvnia />
              </p>
            </div>
            <hr />
            <div>
              <p>Оплата за доставку</p>
              <p>Самовивіз</p>
            </div>
            <hr />
            <h3>Всього:</h3>
            <h3>
              {0} грн. | <TbCurrencyHryvnia />
            </h3>
          </div>
        </div>
        <button>ЗАМОВИТИ</button>
      </div>
      <div>
        <p>Якщо у Вас є промокод введіть тут</p>
        <div>
          <input type="text" placeholder="promo" />
          <button>Застосувати</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
