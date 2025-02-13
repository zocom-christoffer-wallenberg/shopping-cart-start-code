import "./Products.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../reducers/productSlice";

import Header from "../components/Header/Header";
import Product from "../components/Product/Product";

function Products() {
  const dispatch = useDispatch();
  const productState = useSelector((state) => {
    return state.product;
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productComponents = productState?.products?.map((product) => {
    return <Product data={product} key={product.id} />;
  });

  return (
    <section>
      <Header />
      {productState.isLoading ? (
        <h3>Laddar produkter...</h3>
      ) : (
        <section className="products">{productComponents}</section>
      )}
      {productState.isError ? <h2>Något gick fel, försök igen senare</h2> : ""}
    </section>
  );
}

export default Products;
