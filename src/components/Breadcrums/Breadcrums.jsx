import css from "./Breadcrums.module.css";
import { GrNext } from "react-icons/gr";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className={css.breadcrums}>
      Home <GrNext /> SHOP <GrNext /> {product.category} <GrNext />{" "}
      {product.name}
    </div>
  );
};

export default Breadcrums;
