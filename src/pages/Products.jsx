import "./Products.css";
import { useState, useEffect } from "react";

import Header from "../components/Header/Header";
import Product from "../components/Product/Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function getProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, []);

  const productComponents = products?.map((product) => {
    return <Product data={product} key={product.id} />;
  });

  return (
    <section>
      <Header />
      {isLoading ? (
        <h3>Laddar produkter...</h3>
      ) : (
        <section className="products">{productComponents}</section>
      )}
    </section>
  );
}

export default Products;
