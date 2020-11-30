import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import st from "../../styles/module/components/cards.module.scss";
import { useCountLike } from "../../context/countLike.context";
import { useCards } from "../../context/likeCards.context";

function Cards({ items, page }) {
   // ---- HOKKS
   const [like, setLike] = useState(false);
   const { likeCards, setLikeCards } = useCards();
   const { countLike, setCountLike } = useCountLike();

   // useEffect(() => {
   //    console.log(likeCards);
   // });

   //----- FUNCTION REMOVE ITEM LIKECARDS
   const handleRemove = (removeId) => {
      // console.log(removeId);
      const newList = likeCards.filter((item) => item.id !== removeId);
      setLikeCards(newList);
   };

   //----- FUNCTION THAT DUPLICATES THE PRODUCTS I LIKE FOR THE PAGE LIKE
   const addLikes = (items) => {
      // console.log(items);
      setLikeCards([...likeCards, items]);
   };

   //----- FUNCTION THAT VALIDATES THE I LIKE BUTTON
   const likeBoll = (items, removeId, page) => {
      if (like) {
         setLike(false);
         setCountLike(countLike - 1);
         handleRemove(removeId);
      } else {
         setLike(true);
         setCountLike(countLike + 1);
         page == "home" ? addLikes(items) : null;
      }
   };

   const buttonClass = (id) => {
      likeCards.map((val, index) => {
         val.id === id ? true : false;
      });
   };

   //  --------- RENDER ---------------
   return (
      <div className={st.cards}>
         <div className={st.item}>
            <Image src={items.photo} width={300} height={200} />
            <h2>{items.name}</h2>
            <div className={st.reactions}>
               <button
                  onClick={() => likeBoll(items, items.id, page)}
                  className={like || buttonClass(items.id) ? st.backg : ""}
               >
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
