import { useContext } from "react";
import css from "./Category.module.css";
import { HomeContext } from "../../context/HomeContext";
import Item from "../../components/Items/Item";

const Category = (props) => {
  const { all_products } = useContext(HomeContext);
  return (
    <div className={css.category}>
      <img className={css.categoryBanner} src={props.banner} alt="" />
      <div className={css.categoryIndexSort}>
        <p>
          <span> Перегляд 1-12 </span> з 36 роллів
        </p>
        <div className={css.categorySort}>
          Відсортовано за <img></img>
        </div>
      </div>
      <div className={css.categoryProducts}>
        {all_products.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className={css.categoryLoad}>Більше...</div>
    </div>
  );
};

export default Category;
