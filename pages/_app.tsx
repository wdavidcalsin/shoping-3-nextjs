import "bootstrap-container";
import "../styles/global/styles.scss";
import { WishlistProvider } from "../context/wishlist.context";
import { ProductsContextProvider } from "../context/product.context";
import { CartsProvider } from "../context/carts.context";

export default function MyApp({ Component, pageProps }) {
   return (
      <CartsProvider>
         <WishlistProvider>
            <ProductsContextProvider>
               <Component {...pageProps} />
            </ProductsContextProvider>
         </WishlistProvider>
      </CartsProvider>
   );
}
