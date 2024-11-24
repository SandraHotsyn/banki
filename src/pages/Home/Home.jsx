import Hero from "../../components/Hero/Hero";
import Offers from "../../components/Offers/Offers";
import Popular from "../../components/Popular/Popular";
import NewCollection from "../../components/NewCollection/NewCollection";
import css from "./Home.module.css";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Home;
