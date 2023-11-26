import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";
import Watch from "../Assets/images/watch-1.png";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
      </Helmet>
      <Breadcrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex py-3 justify-content-between align-items-center">
                <h4 className="cart-1">Product</h4>
                <h4 className="cart-2">Price</h4>
                <h4 className="cart-3">Quantity</h4>
                <h4 className="cart-4">Total</h4>
              </div>
              <div className="cart-details mb-1 d-flex py-3 justify-content-between align-items-center">
                <div className="cart-1 d-flex align-items-center gap-15">
                  <div className="w-25">
                    <img className="img-fluid" src={Watch} alt="prodimg" />
                  </div>
                  <div className="w-75">
                    <p className="">Camera</p>
                    <p className="color">Color : #0f0f0f</p>
                    <p className="size">Size : S</p>
                  </div>
                </div>
                <div className="cart-2">
                  <h5 className="price">$ 250</h5>
                </div>
                <div className="cart-3 d-flex align-items-center gap-15">
                  <input className="form-control" type="number" name="" id="" min={1} max={10} />
                  <div>
                    <MdDelete className="fs-4" />
                  </div>
                </div>
                <div className="cart-4">
                  <h5 className="price">$ 250</h5>
                </div>
              </div>
              <div className="cart-details mb-1 d-flex py-3 justify-content-between align-items-center">
                <div className="cart-1 d-flex align-items-center gap-15">
                  <div className="w-25">
                    <img className="img-fluid" src={Watch} alt="prodimg" />
                  </div>
                  <div className="w-75">
                    <p className="">Camera</p>
                    <p className="color">Color : #Ae2F3F</p>
                    <p className="size">Size : S</p>
                  </div>
                </div>
                <div className="cart-2">
                  <h5 className="price">$ 250</h5>
                </div>
                <div className="cart-3 d-flex align-items-center gap-15">
                  <input className="form-control" type="number" name="" id="" min={1} max={10} />
                  <div>
                    <MdDelete className="fs-4" />
                  </div>
                </div>
                <div className="cart-4">
                  <h5 className="price">$ 250</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2">
              <div className="d-flex justify-content-between">
                <div>
                  <Link to="/store" className="button mt-0">
                    Continue to Shop
                  </Link>
                </div>
                <div className="cart-bottom d-flex  flex-column align-items-baseline">
                  <h4 className="me-4 mb-0 mt-1">SubTotal : $1000</h4>
                  <p className="mt-2">Shipping and Taxes Calculated </p>
                  <Link to="/checkout" className="button mt-0">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
