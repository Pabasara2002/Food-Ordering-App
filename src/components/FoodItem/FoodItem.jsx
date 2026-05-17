import { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const quantity = cartItems[id] || 0;

  return (
    <article className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {quantity === 0 ? (
          <button className="add" onClick={() => addToCart(id)} aria-label={`Add ${name} to cart`}>
            <img src={assets.add_icon_white} alt="" />
          </button>
        ) : (
          <div className="food-item-counter" aria-label={`${quantity} ${name} in cart`}>
            <button onClick={() => removeFromCart(id)} aria-label={`Remove one ${name}`}>
              <img src={assets.remove_icon_red} alt="" />
            </button>
            <span>{quantity}</span>
            <button onClick={() => addToCart(id)} aria-label={`Add one more ${name}`}>
              <img src={assets.add_icon_green} alt="" />
            </button>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rated five stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </article>
  );
};

export default FoodItem;
