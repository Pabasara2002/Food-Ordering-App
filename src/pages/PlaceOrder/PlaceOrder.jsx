import { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const { getTotalCartAmount, clearCart } = useContext(StoreContext)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const subtotal = getTotalCartAmount()
  const deliveryFee = subtotal === 0 ? 0 : 2
  const total = subtotal + deliveryFee

  const handleSubmit = (event) => {
    event.preventDefault()
    if (subtotal === 0) return
    setOrderPlaced(true)
    clearCart()
  }

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <input type="text" inputMode="email" placeholder="Email address" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="tel" placeholder="Phone" required />
        {orderPlaced && <p className="order-success">Order placed. Your food is on the way.</p>}
      </div>
      <div className="place-order-right">
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
          <button disabled={subtotal === 0} type="submit">Place order</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
