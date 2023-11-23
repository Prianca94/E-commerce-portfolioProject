import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { faBars, faCartArrowDown, faCodeCompare, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-0">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mt-1 mb-1">Flat $25 Off On Your First Order and Free Shipping</p>
            </div>
            <div className="col-6">
              <p className="contactclass text-end text-white mt-1 mb-1">
                <img src="images/phone.png" alt="phone" />{" "}
                <a className="text-white" href="tel:+91 9574382333">
                  {" "}
                  +91 9574382333
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-middle-strip py-0">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h4>
                <Link className="text-white mt-0 mb-0">A-Ze Bazaar</Link>
              </h4>
            </div>
            <div className="col-5 mt-1">
              <div class="input-group mb-1">
                <input type="text" className="form-control" placeholder="Search Here..." aria-label="Search Here..." aria-describedby="inputGroup-sizing-default" />
                <span className="input-group-text" id="inputGroup-sizing-default">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compareproducts" className="d-flex align-items-center gap-10 text-white">
                    <FontAwesomeIcon className="fontawesomeclass fs-4" icon={faCodeCompare} />
                    <p className="mb-1 mt-2">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <FontAwesomeIcon className="fontawesomeclass fs-4" icon={faHeart} />
                    <p className="mb-1 mt-2">
                      Favourite <br /> WishList
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <FontAwesomeIcon className="fontawesomeclass fs-4" icon={faUser} />
                    <p className="mb-1 mt-2">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-3 text-white">
                    <FontAwesomeIcon className="fs-5" icon={faCartArrowDown} />
                    <div className="d-flex flex-column gap-3">
                      <span className="badge bg-white text-dark mt-1 mb-0">0</span>
                      <p className="mb-1 mt-2">$250</p>
                    </div>
                  </Link>
                </div>
                <div className="menuicon">
                  <FontAwesomeIcon className="fontawesomeclass" icon={faBars} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom-strip p-2">
        <div className="container-xxl"></div>
        <div className="row">
          <div className="col-10">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
                <div class="dropdown">
                  <FontAwesomeIcon className="text-white" icon={faSlack} />
                  <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 me-5 d-inline-block" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link class="dropdown-item  text-white" href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item  text-white" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item  text-white" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="menu-links text-white">
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/" className="text-white">
                    Home
                  </NavLink>
                  <NavLink to="/store" className="text-white">
                    Our Products
                  </NavLink>
                  <NavLink to="/blog" className="text-white">
                    Blogs
                  </NavLink>
                  <NavLink to="/contact" className="text-white">
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="menuicon2">
              <FontAwesomeIcon className="fontawesomeclass" icon={faBars} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
