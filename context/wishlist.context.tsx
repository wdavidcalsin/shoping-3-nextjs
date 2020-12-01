import React, { useContext, createContext, useState } from "react";
import { filter, find } from "lodash";

export const WishlistContext = createContext({} as any);

export const WishlistProvider = ({ children }: any) => {
   const [wishlistData, setWishlistData] = useState([]);

   const hasProductInWislist = (product) => {
      return find(
         wishlistData,
         (wishlistProduct: any) => wishlistProduct.id === product.id
      );
   };

   const addProductToWishlist = (product) => {
      const hasProduct = hasProductInWislist(product);

      let payloadData;

      if (hasProduct) {
         payloadData = filter(
            wishlistData,
            (wishlistProduct: any) => wishlistProduct.id !== product.id
         );
      } else {
         payloadData = [...wishlistData, product];
      }

      setWishlistData(payloadData);
   };

   return (
      <WishlistContext.Provider
         value={{
            wishlistData,
            wishlistCount: wishlistData.length,
            addProductToWishlist,
            hasProductInWislist,
         }}
      >
         {children}
      </WishlistContext.Provider>
   );
};

export function useWishlist() {
   const {
      wishlistData,
      wishlistCount,
      addProductToWishlist,
      hasProductInWislist,
   } = useContext(WishlistContext);

   return {
      wishlistData,
      wishlistCount,
      addProductToWishlist,
      hasProductInWislist,
   };
}

export default useWishlist;
