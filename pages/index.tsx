import Head from "next/head";
import Link from "next/link";
import "bootstrap-container";
import Header from "../components/header";
import Cards from "../components/cards";
import { CountLikeProvider } from "../context/countLike.context";

export default function Home() {
   const styleCards: any = {
      display: "flex",
      flexFlow: "row wrap",
   };

   return (
      <>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Header />
         <main style={{ padding: "30px 0" }}>
            <div className="container">
               <div style={styleCards}>
                  <Cards />
                  <Cards />
                  <Cards />
                  <Cards />
                  <Cards />
                  <Cards />
               </div>
            </div>
         </main>
      </>
   );
}
