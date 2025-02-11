import "./CartItem.css";
import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";

function CartItem(props) {
  const { item } = props;

  return (
    <article className="cart-item">
      <h3 className="cart-item-title">
        {item.title}
        <span className="dots"></span>
      </h3>
      <p className="cart-item-desc">{Math.round(item.price)} kr</p>
      <aside className="item-quantity">
        <img src={arrowUp} alt="increase" /> <p className="quantity">1</p>{" "}
        <img src={arrowDown} alt="decrease" /> <p className="quantity">1</p>
      </aside>
    </article>
  );
}

export default CartItem;
