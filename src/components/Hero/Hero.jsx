import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.hero}>
      <div className={css.heroLeft}>
        <h2>NEEW</h2>
        <div>
          <div>
            <p>new</p>
            <img src="" alt="hero" />
          </div>
          <p>Rjkktrwsz</p>
          <p>for everyone</p>
        </div>
        <div className={css.heroLatest}></div>
      </div>
      <div className={css.heroRight}>
        {/* <img src={hero_image} alt="hero" /> */}
      </div>
    </div>
  );
};

export default Hero;
