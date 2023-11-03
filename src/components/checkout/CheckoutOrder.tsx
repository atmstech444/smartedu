import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const CheckoutOrder = () => {
  const [shipingCast, setShipingCast] = useState(0);
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  const totalPrice = cartProducts.reduce((total, product) => {
    if (typeof product.price === "number" && product.price !== 0) {
      return total + (product.price ?? 0) * (product.quantity ?? 0);
    }
    return total;
  }, 0);

  return (
    <div className="your-order mb-30 ">
      <h3>Your order</h3>
      <div className="your-order-table table-responsive">
        <table>
          <thead>
            <tr>
              <th className="product-name">Product</th>
              <th className="product-total">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.length ? (
              <>
                {cartProducts.map((item) => (
                  <tr key={item.id}>
                    <th className="product-name">
                      {item.title}{" "}
                      <strong className="product-quantity">
                        {" "}
                        × {item.quantity}
                      </strong>
                    </th>
                    <td className="product-total">
                      <span className="amount">
                        {typeof item.price === "number" && item.price !== 0
                          ? item.price * item.quantity
                          : ""}
                      </span>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <></>
            )}
          </tbody>
          <tfoot>
            <tr className="cart-subtotal">
              <th>Cart Subtotal</th>
              <td>
                <span className="amount">${totalPrice}</span>
              </td>
            </tr>
            <tr className="shipping">
              <th>Shipping</th>
              <td>
                <ul>
                  <li>
                    <input
                      type="radio"
                      onClick={() => setShipingCast(7)}
                      name="Shipping"
                      id="ShippingCost"
                    />
                    <label htmlFor="ShippingCost">
                      Flat Rate: <span className="amount">$7.00</span>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onClick={() => setShipingCast(0)}
                      name="Shipping"
                      id="FreeShipping"
                    />
                    <label htmlFor="FreeShipping">Free Shipping:</label>
                  </li>
                  <li></li>
                </ul>
              </td>
            </tr>
            <tr className="order-total">
              <th>Order Total</th>
              <td>
                <strong>
                  <span className="amount">${totalPrice + shipingCast}</span>
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="payment-method">
        <div className="accordion" id="checkoutAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="paymentTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#payment"
                aria-expanded="false"
                aria-controls="payment"
              >
                Payment Method
              </button>
            </h2>
            <div
              id="payment"
              className="accordion-collapse collapse"
              aria-labelledby="paymentTwo"
              data-bs-parent="#checkoutAccordion"
            >
              <div className="accordion-body">
                <p>You need to pay it with your prefable methods</p>
                <div className="payment-option mb-10">
                  <label htmlFor="pay_later_payment">
                    <input type="radio" id="pay_later_payment" name="payment_method" /> Pay later
                  </label>
                </div>
                <div className="payment-option mb-10">
                  <label htmlFor="mollie_payment">
                    <input type="radio" id="mollie_payment" name="payment_method" /> Mobile Payment
                  </label>
                </div>
                <div className="payment-option mb-10">
                  <label htmlFor="paypal_payment">
                    <input type="radio" id="paypal_payment" name="payment_method" /> Pay with Paypal
                  </label>
                </div>
                <div className="payment-option mb-10">
                  <label htmlFor="stripe_payment">
                    <input type="radio" id="stripe_payment" name="payment_method" /> Pay with Visa/Mastercard
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-button-payment mt-20">
          <button type="submit" className="e-btn e-btn-border">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrder;
