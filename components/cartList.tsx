import Image from "next/image";
import {} from "react";
import useCart from "../context/carts.context";
import style from "../styles/module/components/cartList.module.scss";

const CartList = (props) => {
   const { data } = props;

   const { addProductsToCart } = useCart();

   const changeCart = () => addProductsToCart(data);

   return (
      <div className={style.cartList}>
         <div>
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
            <button>-</button>
            <input type="text" value="1" />
            <button>+</button>
         </div>
      </div>
   );
};

export default CartList;
