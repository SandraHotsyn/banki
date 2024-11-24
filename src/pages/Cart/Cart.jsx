import CartItems from "../../components/CartItems/CartItems";
import css from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={css.cart}>
      <CartItems />
    </div>
  );
};

export default Cart;
