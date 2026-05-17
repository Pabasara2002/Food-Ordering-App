import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate()
  const subtotal = getTotalCartAmount()
  const deliveryFee = subtotal === 0 ? 0 : 2
  const total = subtotal + deliveryFee

  return (
    <section className="cart">
      <div className="cart-items">
        <div className="cart-items-title cart-heading">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item) => {
          const quantity = cartItems[item._id] || 0
          if (quantity === 0) return null

          return (
            <div key={item._id}>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{quantity}</p>
                <p>${item.price * quantity}</p>
                <button onClick={() => removeFromCart(item._id)} aria-label={`Remove one ${item.name}`}>x</button>
              </div>
              <hr />
            </div>
          )
        })}
        {subtotal === 0 && (
          <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Add something delicious from the menu to start an order.</p>
            <Link to="/">Browse menu</Link>
          </div>
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total}</b>
            </div>
          </div>
          <button disabled={subtotal === 0} onClick={() => navigate('/order')}>Proceed to checkout</button>
        </div>
        <div className="cart-promocode">
          <p>Have a promo code?</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
