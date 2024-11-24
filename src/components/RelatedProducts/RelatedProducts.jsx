import css from "./RelatedProducts.module.css";
import data_product from "../assets/data";
import Item from "../Items/Item";

const RelatedProducts = () => {
  return (
    <div className={css.reletedProducts}>
      <h2>Продукти</h2>
      <hr />
      <div className={css.reletedProductsItem}>
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
