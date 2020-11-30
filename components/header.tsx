import Link from "next/link";
import st from "../styles/module/components/header.module.scss";
import Badge from "./badge";
import useWishlist from "../context/countLike.context";

function Header() {
   const { wishlistCount } = useWishlist();
   return (
      <header className={st.header}>
         <div className={`container ${st.item}`}>
            <Link href="/">
               <a>
                  <h1>Tienda 3</h1>
               </a>
            </Link>
            <div className={st.header_rigth}>
               <Link href="/">
                  <a>Home</a>
               </Link>
               <Link href="/like">
                  <a>
                     Like
                     <Badge content={wishlistCount} />
                  </a>
               </Link>
               <Link href="/carts">
                  <a>Carts</a>
               </Link>
            </div>
         </div>
      </header>
   );
}

export default Header;
