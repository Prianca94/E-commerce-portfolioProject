import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WishList</title>
      </Helmet>
      <Breadcrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-2">
      <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.png" alt="cross" className="position-absolute img-fluid cross" />

                <div className="wishlist-card-image">
                  <img src="images/watch-1.png" className="img-fluid w-100 h-100" alt="watch-1" />
                </div>
                <h5 className="title mt-3 mb-3">Titan Quartz Analog White Dial Leather Strap Watch for Men</h5>
                <h6 className="price mt-2 mb-1">$200</h6>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.png" alt="cross" className="position-absolute img-fluid cross" />

                <div className="wishlist-card-image">
                  <img src="images/watch-1.png" className="img-fluid w-100 h-100" alt="watch-1" />
                </div>
                <h5 className="title mt-3 mb-3">Titan Quartz Analog White Dial Leather Strap Watch for Men</h5>
                <h6 className="price mt-2 mb-1">$200</h6>
              </div>
            </div>
       
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.png" alt="cross" className="position-absolute img-fluid cross" />

                <div className="wishlist-card-image">
                  <img src="images/watch-1.png" className="img-fluid w-100 h-100" alt="watch-1" />
                </div>
                <h5 className="title mt-3 mb-3">Titan Quartz Analog White Dial Leather Strap Watch for Men</h5>
                <h6 className="price mt-2 mb-1">$200</h6>
              </div>
            </div>
       
          </div>
      </Container>
    </>
  );
};

export default Wishlist;
