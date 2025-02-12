import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";

function Product({ data }) {
  const dispatch = useDispatch();

  function handleClick() {
    const item = {
      title: data.title,
      price: data.price,
      id: data.id,
      quantity: 1,
    };

    console.log(item);
    dispatch(addToCart(item));
  }

  return (
    <article className="product">
      <img src={data.thumbnail} alt="" className="product__image" />
      <h2 className="product__title">{data.title}</h2>
      <p className="product__price">{data.price} kr</p>
      <footer className="product__buttons">
        <button onClick={handleClick} className="product__button">
          Add to cart
        </button>
      </footer>
    </article>
  );
}

export default Product;
