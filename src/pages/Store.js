import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";

const Store = () => {
  console.log("store");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Store</title>
      </Helmet>
      <Breadcrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h3 className="subtitle">Availability</h3>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        In Stock(1)
                      </label>{" "}
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        Out of Stock
                      </label>
                    </div>
                    <div className="mt-3">
                      <h3 className="subtitle">Price</h3>
                      <div className="d-flex align-items-center gap-10">
      
                        <div className="form-floating  mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label className="label" htmlFor="floatingInput">From</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label className="label" htmlFor="floatingInput">To</label>
                        </div>
                      </div>
                      <h3 className="subtitle">Colors</h3>
                      <div>
                        <ul className="colors ps-0">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>

                        </ul>

                      </div>
                      <h3 className="subtitle">Size</h3>
                      <div>
                      <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        S (5)
                      </label>{" "}
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        M (2)
                      </label>{" "} 
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        L (5)
                      </label>{" "}
                    </div>
                   
                   
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
