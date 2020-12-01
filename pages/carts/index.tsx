import Layout from "../../components/layout";
import Empty from "../../components/empty";
import useCart from "../../context/carts.context";
import React from "react";
import CartList from "../../components/cartList";

export default function Carts() {
   const { cartData } = useCart();

   const isEmpty = cartData.length <= 0;

   return (
      <Layout>
         <div className="container">
            {isEmpty ? (
               <Empty img="https://www.flaticon.es/svg/static/icons/svg/413/413037.svg" />
            ) : (
               <div>
                  {cartData.map((item, index) => (
                     <CartList data={item} key={index} />
                  ))}
               </div>
            )}
         </div>
      </Layout>
   );
}
