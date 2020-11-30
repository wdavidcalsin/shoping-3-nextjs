import "bootstrap-container";
import "../styles/global/styles.scss";
import { WishlistProvider } from "../context/countLike.context";
import { ProductsContextProvider } from "../context/product.context";
import { LikeCardsProvider } from "../context/likeCards.context";

export default function MyApp({ Component, pageProps }) {
   return (
      <LikeCardsProvider>
         <WishlistProvider>
            <ProductsContextProvider>
               <Component {...pageProps} />
            </ProductsContextProvider>
         </WishlistProvider>
      </LikeCardsProvider>
   );
}
