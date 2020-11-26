import { createContext, useContext, useState } from "react";
import { apiProducts } from "../services/api";

export const ProductsContext = createContext({} as any);

export const ProductsContextProvider = ({ children }) => {
   const [products] = useState(apiProducts);

   return (
      <ProductsContext.Provider value={{ products }}>
         {children}
      </ProductsContext.Provider>
   );
};

export const useProducts = () => {
   const { products } = useContext(ProductsContext);
   return { products };
};
