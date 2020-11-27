import { useState } from "react";
import { useCountLike } from "../../context/countLike.context";
import { useCards } from "../../context/likeCards.context";

export const [like, setLike] = useState(false);
const { countLike, setCountLike } = useCountLike();
const { likeCards, setLikeCards } = useCards();

export const addLikes = (items) => {
   console.log(items);
   setLikeCards([...likeCards, items]);
};

export const likeBoll = (items) => {
   if (like) {
      setLike(false);
      setCountLike(countLike - 1);
   } else {
      setLike(true);
      setCountLike(countLike + 1);
      addLikes(items);
   }
};
