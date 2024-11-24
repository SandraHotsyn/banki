import css from "./ProductDisplay.module.css";
import { PiStarFill, PiStarLight } from "react-icons/pi";
import { TbCurrencyHryvnia } from "react-icons/tb";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className={css.productDisplay}>
      <div className={css.displayLeft}>
        <div className={css.productDisplayImageList}>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className={css.productDisplayImage}>
          <img className={css.productDisplayMyImg} src={product.image} alt="" />
        </div>
      </div>
      <div className={css.displayRight}>
        <h2>{product.name}</h2>
        <div className={css.stars}>
          <PiStarFill /> <PiStarFill /> <PiStarFill /> <PiStarFill />{" "}
          <PiStarLight />
          <p>122</p>
        </div>
        <div className={css.productDisplayRightPrices}>
          <div className={css.productDisplayRightOldPrices}>
            {product.old_price} грн. | <TbCurrencyHryvnia />
          </div>
          <div className={css.productDisplayRightNewPrices}>
            {product.new_price} грн. | <TbCurrencyHryvnia />
          </div>
          <div className={css.productDisplayRightDecription}>vjhvgvhngn</div>
          <div className={css.selectMore}>
            <h2>Виберіть кількість приборів</h2>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
        <button>Додати до кошика</button>
        <p className={css.ProductDisplayCategory}>
          <span>Категорія:</span> Дракон, назва
        </p>

        <p className={css.ProductDisplayCategory}>
          <span>Теги:</span> смачно, назва
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
