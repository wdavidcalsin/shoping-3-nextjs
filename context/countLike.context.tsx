import React, { useContext, createContext, useState } from "react";

export const countLikeContext = createContext({} as any);

export const CountLikeProvider = ({ children }: any) => {
   const [countLike, setCountLike] = useState(0);
   const values = { countLike, setCountLike };

   return (
      <countLikeContext.Provider value={values}>
         {children}
      </countLikeContext.Provider>
   );
};

export function useCountLike() {
   const { countLike, setCountLike } = useContext(countLikeContext);

   return { countLike, setCountLike };
}

export default useCountLike;
