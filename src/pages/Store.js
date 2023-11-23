import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";
import ReactStars from "react-rating-stars-component";
import Productcard from "../components/Productcard";
import Color from "../components/Color";

const Store = () => {
  console.log("store");

  const [grid,setGrid]=useState(4);
  console.log(grid);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Store</title>
      </Helmet>
      <Breadcrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 p-0">
              <div className="filter-card mb-2">
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
              <div className="filter-card mb-2">
                <h3 className="filter-title">Filter By</h3>
                <div className="mt-2">
                  <h3 className="subtitle">Availability</h3>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        In Stock (1)
                      </label>{" "}
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        Out of Stock
                      </label>
                    </div>
                    <div className="mt-2">
                      <h3 className="subtitle">Price</h3>
                      <div className="d-flex align-items-center gap-10">
                        <div className="form-floating  mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label className="label" htmlFor="floatingInput">
                            From
                          </label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label className="label" htmlFor="floatingInput">
                            To
                          </label>
                        </div>
                      </div>
                      <h3 className="subtitle">Colors</h3>
                      <div className="mt-2">
                  


                  <Color/>
                      </div>
                      <h3 className="subtitle">Size</h3>
                      <div className="mt-2">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            S (3)
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
              <div className="filter-card mb-2">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-3">
                    <span className="badge bg-light text-secondary rounded-3 py-1 px-2">Headphone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-1 px-2">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-1 px-2">Oppo</span>
                    <span className="badge bg-light text-secondary rounded-3 py-1 px-2">Mobile</span>
                    <span className="badge bg-light text-secondary rounded-3 py-1 px-2">Smart Watch</span>

                    <span className="badge bg-light text-secondary rounded-3 py-1 px-2">Vivo</span>
                    <span className="badge bg-light text-secondary rounded-3 py-1 px-2">Speaker</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-2">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/smart-watches.jpg" alt="randomimg1" className="img-fluid" />
                    </div>

                    <div className="w-50">
                      <h5 className="mb-0">Kids watch in black for students</h5>
                      <ReactStars count={5} size={20} value={3} edit={false} activeColor="#ffd700" />
                      <p className="price">$220.00</p>
                    </div>
                  </div>
                  <div className="random-products d-flex  mt-3">
                    <div className="w-50">
                      <img src="images/laptop.jpg" alt="randomimg1" className="img-fluid" />
                    </div>

                    <div className="w-50">
                      <h5 className="mb-0">Acer Spin5 Laptop</h5>
                      <ReactStars count={5} size={20} value={3} edit={false} activeColor="#ffd700" />
                      <p className="price">$1220.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-2">
              <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                  <p className="mb-0">Sort By:</p>
                  <select className="form-control form-select">
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected="selected">Best Selling</option>
                    <option value="title-ascending">Alphabetically A-Z</option>
                    <option value="title-descending">Alphabetically Z-A</option>
                    <option value="price-ascending">Prices,low to high</option>
                    <option value="price-descending">Prices,high to low</option>
                    <option value="created-ascending">Date,old to new</option>
                    <option value="created-descending">Date,new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-3">
                <p className="mb-0">21 Products</p>
                <div className="d-flex align-items-center">
                <img className="img-fluid d-block" src="images/grid-4.png"alt="1"  onClick={()=>setGrid(3)}/>
                <img className="img-fluid d-block" src="images/grid-3.png"alt="2" onClick={()=>setGrid(4)}/>
                <img className="img-fluid d-block" src="images/grid-2.png"alt="1" onClick={()=>setGrid(6)}/>
                <img className="img-fluid d-block" src="images/hori-3.png"alt="1" onClick={()=>setGrid(12)}/>

                </div>

                </div>
              </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex flex-wrap gap-10">
                <Productcard grid={grid}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Store;
