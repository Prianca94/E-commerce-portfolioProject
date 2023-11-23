import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-top py-2 px-2">
        <div className="container--xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="footer-top-data d-flex gap-15 align-items-center px-2">
                <FontAwesomeIcon
                  className="text-white mb-3"
                  icon={faEnvelope}
                />
                <p className="text-white">Sign up for Newsletter</p>
              </div>
            </div>
            <div className="col-6">
              <div class="input-group mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Write Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text text-white" id="basic-addon2">
                  {" "}
                  SUBSCRIBE
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-middle py-3 px-3">
        <div className="container-xxl">
          <div className="row  text-white">
            <div className="col-4">
              <h5 className="mb-3">Contact</h5>
              <div>
                <address className="text-white">
                  3, prime Residency <br />
                  Manjipura Road <br />
                  pincode-387002
                </address>
                <a
                  className="text-white mt-0 d-block mb-0"
                  href="tel:+91 9574382333"
                >
                  +91 9574382333
                </a>
                <a
                  className="mt-1 d-block mb-1 text-white"
                  href="mailto:azee@gmail.com"
                >
                  Email - azee@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-15">
                  <a className="text-white" href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a className="text-white" href="https://www.whatsapp.com">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a className="text-white" href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className="text-white" href="https://www.instagram.com">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h5 className="mb-3">Information</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-0 mb-0">Privacy Policy</Link>
                <Link className="text-white py-0 mb-0">Refund Policy</Link>
                <Link className="text-white py-0 mb-0">Shipping Policy</Link>
                <Link className="text-white py-0 mb-0">Terms Of Service</Link>
                <Link className="text-white py-0 mb-0">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className="mb-3">Account</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-0 mb-0">Search</Link>
                <Link className="text-white py-0 mb-0">About us</Link>
                <Link className="text-white py-0 mb-0">FAQ</Link>
                <Link className="text-white py-0 mb-0">Contact</Link>
                <Link className="text-white py-0 mb-0">Size-Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="mb-3">Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-0 mb-0">Laptop</Link>
                <Link className="text-white py-0 mb-0">Mobile</Link>
                <Link className="text-white py-0 mb-0">Tablet</Link>
                <Link className="text-white py-0 mb-0">Watch</Link>
                <Link className="text-white py-0 mb-0">Accessories</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-end py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="ms-0 text-white">
                &copy;{new Date().getFullYear()} www.a-zeeBazaar.com . All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
