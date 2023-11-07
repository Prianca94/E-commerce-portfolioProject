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
                    src="/images/mobileimg1.jpg"
                    alt="bannerimg2"
         
                  ></img>

                  {/* <div className="small-banner-content text-white position-absolute">
                    <h5>HeadPhones and Earphones</h5>
                    <h7>Buy Best HeadPhones</h7>
                    <p>
                      Starting from $99 <br />
                      or monthly $12
                    </p>
                  </div> */}
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/mobileimg1.jpg"
                    alt="bannerimg2"
     
                  ></img>

                  {/* <div className="small-banner-content text-white position-absolute">
                    <h5>HeadPhones and Earphones</h5>
                    <h7>Buy Best HeadPhones</h7>
                    <p>
                      Starting from $99 <br />
                      or monthly $12
                    </p>
                  </div> */}
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/mobileimg1.jpg"
                    alt="bannerimg2"
     
                  ></img>

                  {/* <div className="small-banner-content text-white position-absolute">
                    <h5>HeadPhones and Earphones</h5>
                    <h7>Buy Best HeadPhones</h7>
                    <p>
                      Starting from $99 <br />
                      or monthly $12
                    </p>
                  </div> */}
                </div>
                <div className="small-banner position-relative p-1">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/mobileimg1.jpg"
                    alt="bannerimg2"
     
                  ></img>

                  {/* <div className="small-banner-content text-white position-absolute">
                    <h5>HeadPhones and Earphones</h5>
                    <h7>Buy Best HeadPhones</h7>
                    <p>
                      Starting from $99 <br />
                      or monthly $12
                    </p>
                  </div> */}
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
