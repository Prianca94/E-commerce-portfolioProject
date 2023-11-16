import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homer-wrapper-1 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-1">
                <img
                  className="img-fluid rounded-3"
                  src="/images/headphone-banner.jpg"
                  alt="bannerimg1"
                ></img>
              </div>
              <div className="main-banner-content text-white position-absolute">
                <h5>HeadPhones and Earphones</h5>
                <h7>Buy Best HeadPhones</h7>
                <p>
                  Starting from $99 <br />
                  or monthly $12
                </p>
                <Link className=" button">Buy Now</Link>
              </div>
            </div>
            <div className="col-6">

              <div className="d-flex align-items-center flex-wrap justify-content-between">
                <div className="small-banner position-relative p-1">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/mobile-2.jpg"
                    alt="bannerimg2"
         
                  ></img>

                  <div className="small-banner-content text-black position-absolute">
                    <h5>Mobile</h5><br/>
                    
                    <p>
                      Starting from $99 <br />
                      or monthly $12
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/laptopimg.jpg"
                    alt="bannerimg2"
     
                  ></img>

                  <div className="small-banner-content text-white position-absolute">
                    <h5>Laptop Max</h5><br/>
                    <p>
                      Starting from $99 <br />
                      or monthly $12
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/tabletimg.jpg"
                    alt="bannerimg2"
     
                  ></img>

                  <div className="small-banner-content text-black position-absolute">
                    <h5 className="text-black">iPad 13 Pro</h5><br/>
                    
                    <p>
                      Starting from $999 <br />
                      or monthly $412
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/mobile-2.jpg"
                    alt="bannerimg2"
     
                  ></img>

                  <div className="small-banner-content text-black position-absolute">
                    <h5>HeadPhones and Earphones</h5><br/>
                
                    <p>
                      Starting from $99 <br />
                      or monthly $12
                    </p>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="images/shipping.png" alt="services"/>
                </div>
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all orders over $5</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img  src="images/discount.png" alt="services"/>
                </div>
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save upto 25% off</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/support.png" alt="services"/>
                </div>
                <div>
                  <h6>Support 24*7</h6>
                  <p className="mb-0">Shop With an Expert</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/afford.png" alt="services"/>
                </div>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Best Price</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/payment.png" alt="services"/>
                </div>
                <div>
                  <h6>Secure Payment</h6>
                  <p className="mb-0">100% Protected Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
