import React from "react";
import Cards from "../../components/cards";
import Empty from "../../components/empty";
import Layout from "../../components/layout";
import useWishlist from "../../context/wishlist.context";

import style from "../../styles/module/page/like.module.scss";

export default function Like() {
   const { wishlistData } = useWishlist();

   const isEmpty = wishlistData.length <= 0;

   const styleCards: any = {
      display: "flex",
      flexFlow: "row wrap",
   };

   return (
      <Layout>
         <div className="container">
            {isEmpty ? (
               <Empty img="https://www.flaticon.es/svg/static/icons/svg/1554/1554661.svg" />
            ) : (
               <div style={styleCards}>
                  {wishlistData.map((item, index) => (
                     <Cards data={item} key={index} />
                  ))}
               </div>
            )}
         </div>
      </Layout>
   );
}
