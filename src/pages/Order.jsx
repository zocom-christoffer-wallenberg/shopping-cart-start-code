import "./Order.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartItem from "../components/CartItem/CartItem";

function Order() {
  const cart = useSelector((state) => {
    return state.cart.products;
  });

  const cartItemComponents = cart.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });

  return (
    <section className="order">
      <h2>Cart</h2>
      <section className="order__summary">{cartItemComponents}</section>
      <Link to="/">Tillbaka till produkter</Link>
    </section>
  );
}

export default Order;
