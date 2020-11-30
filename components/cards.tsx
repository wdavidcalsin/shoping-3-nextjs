import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import st from "../styles/module/components/cards.module.scss";
import { useWishlist } from "../context/countLike.context";

function Cards(props) {
   const { data } = props;

   const {
      wishlistData,
      addProductToWishlist,
      hasProductInWislist,
   } = useWishlist();

   const like = useMemo(() => {
      return !!hasProductInWislist(data);
   }, [wishlistData]);

   const onChange = () => addProductToWishlist(data);

   const classNameBooll = (id) => (like ? st.backg : "");

   return (
      <div className={st.cards}>
         <div className={st.item}>
            <Image src={data.photo} width={300} height={300} />
            <h2>{data.name}</h2>
            <div className={st.reactions}>
               <button onClick={onChange} className={classNameBooll(data.id)}>
                  <img
                     src="https://www.flaticon.es/svg/static/icons/svg/535/535234.svg"
                     alt=""
                  />
               </button>
               <button>
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
