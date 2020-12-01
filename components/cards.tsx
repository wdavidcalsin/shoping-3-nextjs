import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import st from "../styles/module/components/cards.module.scss";
import { useWishlist } from "../context/wishlist.context";
import useCart from "../context/carts.context";

function Cards(props) {
   const { data } = props;

   const {
      wishlistData,
      addProductToWishlist,
      hasProductInWislist,
   } = useWishlist();

   const { cartData, addProductsToCart, hasProductInCart } = useCart();

   const like = useMemo(() => {
      return !!hasProductInWislist(data);
   }, [wishlistData]);

   const cart = useMemo(() => {
      return !!hasProductInCart(data);
   }, [cartData]);

   const onChange = () => addProductToWishlist(data);

   const changeCart = () => addProductsToCart(data);

   const classNameBoollWislist = (id) => (like ? st.backgWislist : "");

   const classNameBoollCart = (id) => (cart ? st.backgCart : "");

   return (
      <div className={st.cards}>
         <div className={st.item}>
            <Image src={data.photo} width={300} height={300} />
            <h2>{data.name}</h2>
            <div className={st.reactions}>
               <button
                  onClick={onChange}
                  className={classNameBoollWislist(data.id)}
               >
                  <img
                     src="https://www.flaticon.es/svg/static/icons/svg/535/535234.svg"
                     alt=""
                  />
               </button>
               <button
                  onClick={changeCart}
                  className={classNameBoollCart(data.id)}
               >
                  <img
                     src="https://www.flaticon.es/svg/static/icons/svg/626/626394.svg"
                     alt=""
                  />
               </button>
            </div>
         </div>
      </div>
   );
}

export default Cards;
