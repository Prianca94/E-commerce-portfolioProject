import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';


const UniqueProducts = () => {
  return (
    <>
      <div className="col-4">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src="images/sony.png" className="img-fluid" alt="" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Sony</h5>
              <h6 className="title mb-0">Speaker Spin_5 Connetivity</h6>
              <ReactStars
                count={5}
                size={20}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$100 &nbsp;</span>
                <strike>$200</strike>
              </p>
              <div className="discount d-flex align-items-center gap-5 me-0">
                <p className="mb-0 d-flex align-items-center gap-3">
                  <b>5{" "} </b> Days
                </p>
                <div className="d-flex gap-3 align-items-center">
                  <span className="badge rounded-circle p-2 bg-danger">01</span>
                  :
                  <span className="badge rounded-circle p-2 bg-danger">02</span>
                  :
                  <span className="badge rounded-circle p-2 bg-danger">02</span>
                </div>
              </div>
              <div className="product-count mt-1">
                <p className="mb-2">Product:4</p>

                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button mt-3">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniqueProducts;
