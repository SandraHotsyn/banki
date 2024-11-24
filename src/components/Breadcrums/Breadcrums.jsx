import css from "./Breadcrums.module.css";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className={css.breadcrums}>
      Home <img src="" alt="" /> SHOP <img src="" alt="" /> {product.category}{" "}
      <img src="" alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
