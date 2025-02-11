import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <section className="cart">
      <Link to={"/cart"}>Cart</Link>
      <p className="cart__amount">0</p>
    </section>
  );
}

export default Cart;
