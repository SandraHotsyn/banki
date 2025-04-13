import css from "./DescriptionBox.module.css";

const DescriptionBox = () => {
  return (
    <div className={css.descriptionBox}>
      <div className={css.descrNavigator}>
        <div className={css.descNavBox}>Опис</div>
        <div className={css.fade}> Відгуки (122)</div>
      </div>
      <div className={css.descrBoxDescription}>
        <p>dzgxzxfcghnmbnbsxf</p>
        <p>SDZxxgcvbgnfbx</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
