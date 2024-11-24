import { useContext } from "react";
import css from "./Product.module.css";
import { HomeContext } from "../../context/HomeContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../../components/Breadcrums/Breadcrums";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(HomeContext);
  const { productId } = useParams();

  const product = all_products?.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }
  // console.log(all_products);
  return (
    <div className={css.product}>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
