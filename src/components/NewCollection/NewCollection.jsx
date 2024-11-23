import css from "./NewCollection.module.css";
// import new_collection from "../assets/new_collection";

const NewCollection = () => {
  return (
    <div>
      <h3>НОВИНКИ</h3>
      <hr />
      <div className={css.collections}></div>
    </div>
  );
};

export default NewCollection;
