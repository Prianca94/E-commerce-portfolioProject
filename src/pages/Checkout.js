import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Watch from "../Assets/images/watch-1.png";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left">
                <h3 className="website-name">A-ZeeBazaar</h3>
                <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">Priyanka Lalwani</p>
                <h4 className="title">Shipping Address</h4>
                <form action="" className="d-flex flex-wrap gap-10 justify-content-between">
                  <div className="w-100">
                    <select className="form-control form-select">
                      <option selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div>
                    <input type="text" className="form-control flex-grow-1" placeholder="First Name (Optional)" />
                  </div>
                  <div>
                    <input type="text" className="form-control flex-grow-1" placeholder="Last Name" />
                  </div>
                  <div className="w-100">
                    <input type="text" className="form-control" placeholder="Address" />
                  </div>
                  <div className="w-100">
                    <input type="text" className="form-control" placeholder="Appartment,Suite,etc" />
                  </div>
                  <div>
                    <input type="text" className="form-control flex-grow-1" placeholder="City" />
                  </div>
                  <div>
                    <select className="form-control form-select flex-grow-1">
                      <option selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div>
                    <input type="text" className="form-control flex-grow-1" placeholder="ZipCode" />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link className="text-dark mt-0 mb-1 me-2" to="/cart">
                        <IoIosArrowBack className="me-2 fs-5" />
                        Return to Cart
                      </Link>

                      <Link className="button mt-0 mb-1" to="/cart">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="cart-right">
                <div className="border-bottom  d-flex justify-content-between align-items-center gap-10 mt-3">
                  <div className="w-75 d-flex justify-content-between align-items-center gap-20">
                    <div className="w-25 position-relative ">
                      {" "}
                      <span className="badge rounded-circle text-white bg-secondary position-absolute me-2">1</span>
                      <img className="img-fluid" src={Watch} alt="" style={{ height: "100px", width: "150px" }} />
                    </div>
                    <div className="w-75 d-flex flex-wrap ms-2">
                      <h4 className="title ms-0">Titan Quartz Analog White Dial Leather Strap Watch for Men</h4>
                      <p className="size">S / #f2f2f2 </p>
                    </div>
                  </div>
                  <div className="w-25 me-0">
                    <h5 className="me-0 price">$150</h5>
                  </div>
                </div>
                <div className="border-bottom  d-flex justify-content-between align-items-center gap-10 mt-3">
                  <div className="w-75 d-flex justify-content-between align-items-center gap-20">
                    <div className="w-25 position-relative ">
                      {" "}
                      <span className="badge rounded-circle text-white bg-secondary position-absolute me-2">1</span>
                      <img className="img-fluid" src={Watch} alt="" style={{ height: "100px", width: "150px" }} />
                    </div>
                    <div className="w-75 d-flex flex-wrap ms-2">
                      <h4 className="title ms-0">Titan Quartz Analog White Dial Leather Strap Watch for Men</h4>
                      <p className="size">S / #f2f2f2 </p>
                    </div>
                  </div>
                  <div className="w-25 me-0">
                    <h5 className="me-0 price">$150</h5>
                  </div>
                </div>
                <div className="pro-total border-bottom mt-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <p>SubTotal</p>
                    <p>$250</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0">$0.00</p>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between mt-3">
                  <h4>Total</h4>
                  <h5> $ 250</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
