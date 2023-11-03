"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import ProductInfo from "./ProductInfo";
import { idType, productsType } from "@/interFace/interFace";
import products_data from "@/data/products-data";
import { cart_product, decrease_quantity } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import BreadcrumbTwo from "../common/BreadcrumbTwo/BreadcrumbTwo";
import RelatedProductSlider from "../Elements/Slider/RelatedProductSlider";

const ShopDetailsMain = ({ id }: idType) => {
  const product = products_data.find((item) => item.id == id);
  const dispatch = useDispatch();
  const handleAddToCart = (product: productsType | undefined) => {
    if (product) {
      dispatch(cart_product(product));
    }
  };

  const handleRemoveCart = (product: productsType | undefined) => {
    if (product) {
      dispatch(decrease_quantity(product));
    }
  };

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  const myData = cartProducts.find((item) => item.id === product?.id);
  return (
    <>
      <BreadcrumbTwo titleTwo="Shop Details" subTitleTwo="Shop Details" />
      <div className="shop-details_area pt-120 pb-15">
        <div className="container custome-container">
          <div className="row ">
            <div className="col-lg-4 col-md-12">
              <div className="product-details-img mb-30">
                {product?.image && (
                  <Image
                    src={product?.image}
                    style={{ width: "100%", height: "auto" }}
                    alt="product img"
                  />
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="product-side-info mb-30">
                <h4 className="product-name mb-10"> {product?.title} </h4>
                <span className="product-price">
                  {product?.price === 0 ? "FREE" : `$${product?.price}.00`}
                </span>
                <p>
                  Matent maecenas nec massa viverra aci ute litora aliquam
                  habitant proin commodo bibendum rutru habitant est magnis
                  quisque aliquet congue vesti bulum suscipi erose tellus odio
                  elite purus feugiat prim libero senes nisie gravia
                </p>
                <div className="product-quantity-cart mb-25">
                  <div className="product-quantity-form">
                    <form action="#">
                      <button
                        type="button"
                        onClick={() => myData && handleRemoveCart(product)}
                        className="cart-minus"
                        disabled={!myData}
                      >
                        <i className="far fa-minus"></i>
                      </button>
                      <input
                        className="cart-input m-0"
                        readOnly
                        value={myData?.quantity || 0}
                      />
                      <button
                        onClick={() => handleAddToCart(product)}
                        type="button"
                        className="cart-plus"
                      >
                        <i className="far fa-plus"></i>
                      </button>
                    </form>
                  </div>
                  <Link href="/cart" className="edu-btn">
                    View Cart
                  </Link>
                </div>
                <div className="product__details__tag tagcloud mt-25 mb-10">
                  <span>Tags : </span>
                  <Link href="/shop">App</Link>
                  <Link href="/shop">Tips</Link>
                  <Link href="/shop">Design</Link>
                  <Link href="/shop">Science</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductInfo />
      <RelatedProductSlider />
    </>
  );
};

export default ShopDetailsMain;
