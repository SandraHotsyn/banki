import Hero from "../../components/Hero/Hero";
// import NewCollection from "../../components/NewCollection/NewCollection";
import Offers from "../../components/Offers/Offers";
import Popular from "../../components/Popular/Popular";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
    </div>
  );
};

export default Home;
