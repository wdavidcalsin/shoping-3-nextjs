import Image from "next/image";
import { useState } from "react";
import useCart from "../context/carts.context";
import style from "../styles/module/components/cartList.module.scss";

const CartList = (props) => {
   const { data } = props;

   const [countCartItem, setCountCartItem] = useState(1);

   const subtractCartItem = () => {
      countCartItem >= 2 ? setCountCartItem(countCartItem - 1) : countCartItem;
   };

   const addCartItem = () => {
      setCountCartItem(countCartItem + 1);
   };

   const { addProductsToCart } = useCart();

   const changeCart = () => addProductsToCart(data);

   return (
      <div className={style.cartList}>
         <div className={style.dataCart}>
            <button onClick={changeCart} className={style.btnRemove}>
               X
            </button>
            <Image
               src={data.photo}
               width={50}
               height={50}
               className={style.img}
            />
            <h3>{data.name}</h3>
         </div>
         <div className={style.countCart}>
            <h3>{`$ ${data.price}`}</h3>
            <div>
               <button onClick={subtractCartItem}>-</button>
               <input type="text" value={countCartItem} />
               <button onClick={addCartItem}>+</button>
            </div>
         </div>
      </div>
   );
};

export default CartList;
