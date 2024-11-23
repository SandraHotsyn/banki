import css from "./Popular.module.css";
import data_product from "../assets/data";
import Item from "../Items/Item";

const Popular = () => {
  return (
    <div className={css.popular}>
      <h2>Популярне в Драконах</h2>
      <hr />
      <div className={css.popularItem}>
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

export default Popular;
