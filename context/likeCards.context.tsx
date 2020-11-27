import { createContext, FC, useContext, useState } from "react";

export const LikeCardsContext = createContext({} as any);

export const LikeCardsProvider: FC = ({ children }) => {
   const [likeCards, setLikeCards] = useState([]);

   const value = {
      likeCards,
      setLikeCards,
   };

   return (
      <LikeCardsContext.Provider value={value}>
         {children}
      </LikeCardsContext.Provider>
   );
};

export const useCards = () => {
   const { likeCards, setLikeCards } = useContext(LikeCardsContext);
   return { likeCards, setLikeCards };
};
