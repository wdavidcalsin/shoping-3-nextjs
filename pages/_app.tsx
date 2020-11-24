import "../styles/global/styles.scss";
import { CountLikeProvider } from "../context/countLike.context";

export default function MyApp({ Component, pageProps }) {
   return (
      <CountLikeProvider>
         <Component {...pageProps} />
      </CountLikeProvider>
   );
}
