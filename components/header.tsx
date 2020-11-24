import Link from "next/link";
import st from "../styles/components/header.module.scss";
import Badge from "./badge";
import useCountLike from "../context/countLike.context";

function Header() {
   const { countLike } = useCountLike();
   return (
      <header className={st.header}>
         <div className={"container " + st.item}>
            <h1>Tienda 3</h1>
            <div className={st.header_rigth}>
               <Link href="/">
                  <a>Home</a>
               </Link>
               <Link href="/like">
                  <a>
                     Like
                     <Badge content={countLike} />
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
