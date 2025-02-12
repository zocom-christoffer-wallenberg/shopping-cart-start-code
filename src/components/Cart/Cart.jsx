import "./Cart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => {
    return state.cart.products;
  });

  return (
    <section className="cart">
      <Link to={"/cart"}>Cart</Link>
      <p className="cart__amount">{cart.length}</p>
    </section>
  );
}

export default Cart;
