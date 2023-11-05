import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {
  faCartArrowDown,
  faCodeCompare,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Flat $25 Off On Your First Order and Free Shipping
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                Phone No{" "}
                <a className="text-white" href="tel:+91 9574382333">
                  {" "}
                  +91 9574382333
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-1">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h4>
                <Link className="text-white">A-Ze Bazaar</Link>
              </h4>
            </div>
            <div className="col-5 mt-2">
              <div class="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Here..."
                  aria-label="Search Here..."
                  aria-describedby="inputGroup-sizing-default"
                />
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <FontAwesomeIcon className="fs-4" icon={faCodeCompare} />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <FontAwesomeIcon className="fs-4" icon={faHeart} />
                    <p className="mb-0">
                      Favourite <br /> WishList
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <FontAwesomeIcon className="fs-4" icon={faUser} />
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <FontAwesomeIcon className="fs-4" icon={faCartArrowDown} />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$250</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom-menu p-2">
        <div className="container-xxl"></div>
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">            
            <div>
              <div class="dropdown">
              <FontAwesomeIcon className="text-white" icon={faSlack}/>
                <button
                  class="btn btn-secondary dropdown-toggle bg-transparent border-0 me-5 d-inline-block"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
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
                <NavLink className="text-white">Home</NavLink>
                <NavLink className="text-white">Our Products</NavLink>
                <NavLink className="text-white">Blogs</NavLink>
                <NavLink className="text-white">Contact</NavLink>
              </div>
            </div>
          </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
