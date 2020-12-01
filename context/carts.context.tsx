import { createContext, useContext, useState } from "react";
import { find, filter } from "lodash";

export const CartsContext = createContext({} as any);

export const CartsProvider = ({ children }) => {
   const [cartData, setCartData] = useState([]);

   const hasProductInCart = (product) => {
      return find(
         cartData,
         (wishlistProduct: any) => wishlistProduct.id === product.id
      );
   };

   const addProductsToCart = (product) => {
      const hasProduct = hasProductInCart(product);

      let payloadData;

      if (hasProduct) {
         payloadData = filter(
            cartData,
            (wishlistProduct: any) => wishlistProduct.id !== product.id
         );
      } else {
         payloadData = [...cartData, product];
      }

      setCartData(payloadData);
   };

   return (
      <CartsContext.Provider
         value={{
            cartData,
            cartCount: cartData.length,
            addProductsToCart,
            hasProductInCart,
         }}
      >
         {children}
      </CartsContext.Provider>
   );
};

export const useCart = () => {
   const {
      cartData,
      cartCount,
      addProductsToCart,
      hasProductInCart,
   } = useContext(CartsContext);

   return {
      cartData,
      cartCount,
      addProductsToCart,
      hasProductInCart,
   };
};

export default useCart;
