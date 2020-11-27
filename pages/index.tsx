import "bootstrap-container";
import Cards from "../components/cards/cards";
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
               {products.map((item, index) => (
                  <Cards items={item} key={index} index={index} />
               ))}
            </div>
         </div>
      </Layout>
   );
}
