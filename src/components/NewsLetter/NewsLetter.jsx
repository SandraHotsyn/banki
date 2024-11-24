import css from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={css.newsLetter}>
      <h3>Get t on your Email</h3>
      <p>Опис</p>
      <div>
        <input type="email" placeholder="Your emeil id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
