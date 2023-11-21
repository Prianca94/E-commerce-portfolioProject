import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Productcard = () => {
  return (
    <div className="col-2">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-relative">
            <Link>
            <img src="images/wishlist.png" alt="wishlist"></img>
            </Link>
        </div>
        <div className="product-image">
          <img src="images/product-1.jpg" className="img-fluid" alt="product-img" />
          <img src="images/watch-2.jpg" className="img-fluid" alt="product-img" />
        </div>
        <div className="product-details">
          <h6 className="brand">Sony</h6>
          <div className="product-title">
            <h5>Kids watch in black for students</h5>
            <ReactStars
              count={5}
              size={20}
              value={3}
              edit={false}
              activeColor="#ffd700"/>
            <p className="price">$220.00</p>
          </div>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <Link>
              <img src="images/cart.png" alt="addcart" />
            </Link>
            <Link>
              <img src="images/view.png" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Productcard;
