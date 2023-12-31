import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import Wishlist from "../Assets/images/wishlist.png";
import Product from "../Assets/images/product-1.jpg";
import Watch from "../Assets/images/watch-2.png";
import Cart from "../Assets/images/cart.png";
import View from "../Assets/images/view.png";

const Productcard = (props) => {
  const location = useLocation();
  const { grid } = props;
  console.log(location);

  return (
    <>
      <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-2"}`}>
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={Wishlist} alt="wishlist"></img>
            </button>
          </div>
          <div className="product-image mb-2 mt-2">
            <img src={Product} className="img-fluid" alt="product-img" />
            <img src={Watch} className="img-fluid" alt="product-img" />
          </div>
          <div className="product-details">
            <h6 className="brand">Sony</h6>
            <div className="product-title">
              <h5>Kids watch in black for students</h5>
              <ReactStars count={5} size={20} value={3} edit={false} activeColor="#ffd700" />
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Smart Health Monitoring - Track SpO2, Heart Rate while your workout Social App Notifications & Reminders - Never miss important calls and updates</p>
              <p className="price">$220.00</p>
            </div>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src={Cart} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={View} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-2"}`}>
        <Link  to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={Wishlist} alt="wishlist"></img>
            </button>
          </div>
          <div className="product-image mb-2 mt-2">
            <img src={Product} className="img-fluid" alt="product-img" />
            <img src={Watch} className="img-fluid" alt="product-img" />
          </div>
          <div className="product-details">
            <h6 className="brand">Sony</h6>
            <div className="product-title">
              <h5>Kids watch in black for students</h5>
              <ReactStars count={5} size={20} value={3} edit={false} activeColor="#ffd700" />
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Smart Health Monitoring - Track SpO2, Heart Rate while your workout Social App Notifications & Reminders - Never miss important calls and updates</p>
              <p className="price">$220.00</p>
            </div>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src={Cart} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={View} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Productcard;
