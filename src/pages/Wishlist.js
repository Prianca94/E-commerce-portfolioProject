import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WishList</title>
      </Helmet>
      <Breadcrumb title="Wishlist"/>
      <div className="wishlist-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.png" alt="cross" className="position-absolute img-fluid cross" />
                      
                        <div className="wishlist-card-image">
                        
                  <img src="images/watch-1.png" className="img-fluid w-100 h-100" alt="watch-1" />
                
                
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
