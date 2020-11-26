import Head from "next/head";
import Header from "./header";

const Layout = ({ children }) => {
   return (
      <>
         <Head>
            <title>Home tienda 3</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Header />
         <main style={{ padding: "30px 0" }}>{children}</main>
      </>
   );
};

export default Layout;
