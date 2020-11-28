import React from "react";
import Cards from "../../components/cards/cards";
import Empty from "../../components/empty";
import Layout from "../../components/layout";
import { useCards } from "../../context/likeCards.context";

import style from "../../styles/module/page/like.module.scss";

export default function Like() {
   const { likeCards } = useCards();
   const styleCards: any = {
      display: "flex",
      flexFlow: "row wrap",
   };

   return (
      <Layout>
         <div className="container">
            {likeCards == "" ? (
               <Empty img="https://www.flaticon.es/svg/static/icons/svg/1554/1554661.svg" />
            ) : (
               <div style={styleCards}>
                  {likeCards.map((item, index) => (
                     <Cards items={item} key={index} page="like" />
                  ))}
               </div>
            )}
         </div>
      </Layout>
   );
}
