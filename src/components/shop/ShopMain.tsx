"use client";
import React, { useState } from "react";
import products_data from "@/data/products-data";
import Image from "next/image";
import Link from "next/link";
import { cart_product } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { productsType } from "@/interFace/interFace";
import { wishlist_product } from "@/redux/slices/wishlist-slice";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ShopSidebar from "./ShopSidebar";
import ProductModal from "../common/ProductModel";

const ShopMain = () => {
  const [modalData, setModalData] = useState<any>({});
  const dispatch = useDispatch();

  const handleAddToCart = (product: productsType) => {
    dispatch(cart_product(product));
  };

  //for rating handle
  const getRating = (ratingsNum: any) => {
    let empty_rating_count = 5 - ratingsNum;
    let ratings = [];
    for (let i = 0; i < ratingsNum; i++) {
      ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>);
    }
    for (let i = 0; i < empty_rating_count; i++) {
      ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>);
    }
    return ratings;
  };

  return (
    <>
      <Breadcrumb title="Shop" subTitle="Shop" />
      <section className="shop-area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-8">
              <ShopSidebar />
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="products-wrapper">
                {products_data.slice(0, 16).map((item) => (
                  <div key={item.id} className="product-items text-center">
                    <div className="product-img">
                      <Link href={`/shop-details/${item.id}`}>
                        {item?.image && (
                          <Image
                            src={item?.image}
                            style={{ width: "100%", height: "auto" }}
                            alt="product-img"
                          />
                        )}
                      </Link>
                      <div className="shop-quick-view">
                        <ul>
                          <li>
                            <button
                              className="edu-cart"
                              onClick={() => handleAddToCart(item)}
                            >
                              <i className="fal fa-cart-arrow-down"></i>
                            </button>
                          </li>
                          <li onClick={() => setModalData(item)}>
                            <span
                              data-bs-toggle="modal"
                              data-bs-target="#productModalId"
                            >
                              <i className="fal fa-eye"></i>
                            </span>
                          </li>
                          <li>
                            <button
                              className="edu-heart"
                              onClick={() => dispatch(wishlist_product(item))}
                            >
                              <i className="fal fa-heart"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-content">
                      <h4>
                        <Link href="/shop-details">{item.title}</Link>
                      </h4>
                      <span>
                        {item.price === 0 ? "FREE" : `$${item.price}.00`}
                      </span>
                      <del className="shop-old-price">
                        {item.oldPrice === 0 ? " " : `$${item.oldPrice}`}
                      </del>
                      <div className="edu-check-star">
                        {getRating(item?.rating)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ProductModal modalData={modalData} />
      </section>
    </>
  );
};

export default ShopMain;
