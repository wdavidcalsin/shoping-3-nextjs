import Head from "next/head";
import Link from "next/link";
import Header from "../../components/header";

export default function About() {
   return (
      <div>
         <Head>
            <title>Page of Like</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Header />
         <main>
            <Link href="/">
               <a>Home</a>
            </Link>
            <h1 className="title">Welcome to Like</h1>
         </main>
      </div>
   );
}
