import { useState } from "react";
import Image from "next/image";
import st from "../styles/components/cards.module.scss";
import useCountLike from "../context/countLike.context";

function Cards() {
   const [like, setLike] = useState(false);
   const { countLike, setCountLike } = useCountLike();

   const likeBoll = () => {
      if (like) {
         setLike(false);
         setCountLike(countLike - 1);
      } else {
         setLike(true);
         setCountLike(countLike + 1);
      }
   };

   return (
      <div className={st.cards}>
         <div className={st.item}>
            <Image src="/fresa.png" width={300} height={200} />
            <h2>Fruta de Fresa</h2>
            <div className={st.reactions}>
               <button onClick={likeBoll} className={like ? st.backg : ""}>
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
