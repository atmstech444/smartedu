"use client";
import React from "react";
import Link from "next/link";
import BreadcrumbTwo from "../common/BreadcrumbTwo/BreadcrumbTwo";
import { useDispatch } from "react-redux";
import {
  cart_product,
  clear_cart,
  decrease_quantity,
  remove_cart_product,
} from "@/redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { productsType } from "@/interFace/interFace";
import Image from "next/image";

const CartMain = () => {
  const dispatch = useDispatch();
  const handleRemoveCart = (product: productsType) => {
    dispatch(remove_cart_product(product));
  };

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  const totalPrice = cartProducts.reduce((total, product) => {
    if (typeof product.price === "number" && product.price !== 0) {
      return total + (product.price ?? 0) * (product.quantity ?? 0);
    }
    return total;
  }, 0);

  const handleChange = () => {};

  return (
    <>
      <BreadcrumbTwo titleTwo="My Cart" subTitleTwo="My Cart" />
      {cartProducts.length === 0 && (
        <div className="container">
          <div className="empty-text pt-100 pb-60 text-center">
            <h3>Your cart is empty</h3>
            <Link
              href="/course-sidebar"
              className="e-btn e-btn-7 mt-15"
              type="submit"
            >
              Return to shop
            </Link>
          </div>
        </div>
      )}
      {cartProducts.length >= 1 && (
        <section className="cart-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartProducts?.map((item: any, index) => {
                        const totalPrice = item.price * item.quantity;
                        return (
                          <tr key={index}>
                            <td className="product-thumbnail">
                              <Link href="/course-details">
                                <Image
                                  src={item?.image}
                                  style={{ width: "auto", height: "auto" }}
                                  alt="img"
                                />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link href="/course-details">{item.title} </Link>
                            </td>
                            <td className="product-price">
                              <span className="amount">
                                {item?.price === 0 ? "FREE" : `$${item?.price}`}
                              </span>
                            </td>
                            <td className="product-quantity text-center">
                              <div className="product-quantity mt-10 mb-10">
                                <div className="product-quantity-form">
                                  <form
                                    onSubmit={(e) => e.preventDefault()}
                                    action="#"
                                  >
                                    <button
                                      onClick={() =>
                                        dispatch(decrease_quantity(item))
                                      }
                                      className="cart-minus"
                                    >
                                      <i className="far fa-minus"></i>
                                    </button>
                                    <input
                                      onChange={handleChange}
                                      className="cart-input"
                                      type="text"
                                      defaultValue={1}
                                    />
                                    <button
                                      onClick={() =>
                                        dispatch(cart_product(item))
                                      }
                                      className="cart-plus"
                                    >
                                      <i className="far fa-plus"></i>
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <span className="amount">
                                {totalPrice ? `$${totalPrice}` : 0}
                              </span>
                            </td>
                            <td className="product-remove">
                              <Link
                                onClick={() => handleRemoveCart(item)}
                                href="#"
                              >
                                <i className="fa fa-times"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon d-sm-flex align-items-center">
                        <input
                          id="coupon_code"
                          className="input-text"
                          name="coupon_code"
                          defaultValue=""
                          placeholder="Coupon code"
                          type="text"
                        />
                        <button
                          className="e-btn"
                          name="apply_coupon"
                          type="submit"
                        >
                          Apply coupon
                        </button>
                      </div>
                      <div className="coupon2">
                        <button
                          onClick={() => dispatch(clear_cart())}
                          className="e-btn"
                          name="update_cart"
                          type="submit"
                        >
                          Clear Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>${totalPrice}</span>
                        </li>
                        <li>
                          Total <span>${totalPrice}</span>
                        </li>
                      </ul>
                      <Link className="e-btn e-btn-border" href="/checkout">
                        Proceed to checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartMain;
