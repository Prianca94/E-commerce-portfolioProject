import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      <section className="homer-wrapper-1 py-3">
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
                    <h5>Mobile</h5>
                    <br />

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
                    <h5>Laptop Max</h5>
                    <br />
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
                    <h5 className="text-black">iPad 13 Pro</h5>
                    <br />

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
                    <h5>HeadPhones and Earphones</h5>
                    <br />

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
      </section>
      <section className="home-wrapper-2 py-3 px-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="images/shipping.png" alt="services" />
                </div>
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all orders over $5</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/discount.png" alt="services" />
                </div>
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save upto 25% off</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/support.png" alt="services" />
                </div>
                <div>
                  <h6>Support 24*7</h6>
                  <p className="mb-0">Shop With an Expert</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/afford.png" alt="services" />
                </div>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Best Price</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/payment.png" alt="services" />
                </div>
                <div>
                  <h6>Secure Payment</h6>
                  <p className="mb-0">100% Protected Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt=""></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/smart-watches.jpg" alt=""></img>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Television</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv1.jpg" alt=""></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/smart-watches.jpg" alt=""></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt=""></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt=""></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Television</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv1.jpg" alt=""></img>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee>
                  <div className="mx-4 w-25">
                    <img src="images/brand-1.png" alt="brand1"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-2.png" alt="brand2"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-3.jpg" alt="brand3"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-4.jpg" alt="brand4"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-5.png" alt="brand5"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-6.jpg" alt="brand5"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-7.png" alt="brand5"/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
