import css from "./DescriptionBox.module.css";

const DescriptionBox = () => {
  return (
    <div className={css.descriptionBox}>
      <div className={css.descrNavigator}>
        <div className={css.descNavBox}>Опис</div>
        <div className={css.descNavBox}> Відгуки (122)</div>
      </div>
      <div className={css.descrBoxDescription}>
        <p>dzgxbsxf</p>
        <p>SDZxfbx</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
