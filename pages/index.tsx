import "bootstrap-container";
import Cards from "../components/cards";
import Layout from "../components/layout";
import { useProducts } from "../context/product.context";

export default function Home() {
   const { products } = useProducts();

   const styleCards: any = {
      display: "flex",
      flexFlow: "row wrap",
   };

   return (
      <Layout>
         <div className="container">
            <div style={styleCards}>
               {products.map((item) => (
                  <Cards items={item} key={item.id} />
               ))}
            </div>
         </div>
      </Layout>
   );
}
