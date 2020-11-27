import React from "react";
import Cards from "../../components/cards/cards";
import Layout from "../../components/layout";
import { useCards } from "../../context/likeCards.context";

export default function Like() {
   const { likeCards } = useCards();
   const styleCards: any = {
      display: "flex",
      flexFlow: "row wrap",
   };

   return (
      <Layout>
         <div className="container">
            david
            <div style={styleCards}>
               {likeCards.map((item, index) => (
                  <Cards items={item} key={index} index={index} />
               ))}
            </div>
         </div>
      </Layout>
   );
}
