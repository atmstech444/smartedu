"use client";
import React from "react";
import BreadcrumbTwo from "../common/BreadcrumbTwo/BreadcrumbTwo";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { cart_product } from "@/redux/slices/cartSlice";
import { remove_wishlist_product } from "@/redux/slices/wishlist-slice";

const WishlistMain = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  const dispatch = useDispatch();

  const wishlistProducts = useSelector(
    (state: RootState) => state.wist.cartProducts
  );
  return (
    <>
      <BreadcrumbTwo titleTwo="My Wishlist" subTitleTwo="Wishlist" />
      <section className="cart-area pt-100 pb-100">
        <div className="container">
          {wishlistProducts.length === 0 && (
            <div className="container">
              <div className="text-center">
                <h3>Your wishlist is empty</h3>
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
          {wishlistProducts?.length >= 1 && (
            <div className="row">
              <div className="col-12">
                <form onClick={handleSubmit} action="#">
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
                        {wishlistProducts?.map((item: any, index: any) => (
                          <tr key={index}>
                            <td className="product-thumbnail">
                              <Link href="/course-details">
                                {item?.image && (
                                  <Image
                                    src={item?.image}
                                    style={{ width: "100%", height: "auto" }}
                                    alt="img not found"
                                  />
                                )}
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link href="/course-details">{item?.title}</Link>
                            </td>
                            <td className="product-price">
                              <span className="amount">
                                {item?.price === 0 ? "FREE" : `$${item?.price}`}
                              </span>
                            </td>
                            <td className="product-quantity">
                              <button
                                onClick={() => dispatch(cart_product(item))}
                                className="e-btn e-btn-border"
                                type="submit"
                              >
                                Add TO Cart
                              </button>
                            </td>
                            <td className="product-subtotal">
                              <span className="amount">$130.00</span>
                            </td>
                            <td
                              onClick={() =>
                                dispatch(remove_wishlist_product(item))
                              }
                              className="product-remove"
                            >
                              <i className="fa fa-times"></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WishlistMain;
