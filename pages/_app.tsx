import "bootstrap-container";
import "../styles/global/styles.scss";
import { CountLikeProvider } from "../context/countLike.context";
import { ProductsContextProvider } from "../context/product.context";
import { LikeCardsProvider } from "../context/likeCards.context";

export default function MyApp({ Component, pageProps }) {
   return (
      <LikeCardsProvider>
         <CountLikeProvider>
            <ProductsContextProvider>
               <Component {...pageProps} />
            </ProductsContextProvider>
         </CountLikeProvider>
      </LikeCardsProvider>
   );
}
