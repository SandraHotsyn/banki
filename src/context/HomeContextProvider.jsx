import { HomeContext } from "./HomeContext.jsx";
import all_products from "../components/assets/all_product.js";

const HomeContextProvider = ({ children }) => {
  const contextValue = { all_products };
  return (
    <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>
  );
};

export default HomeContextProvider;
