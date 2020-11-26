import Link from "next/link";
import Layout from "../../components/layout";

export default function Carts() {
   return (
      <Layout>
         <div className="container">
            <Link href="/">
               <a>Home</a>
            </Link>
            <h1 className="title">Welcome to Carts</h1>
         </div>
      </Layout>
   );
}
