import React from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb";
import Color from "../components/Color";
import Cross from "../Assets/images/cross.png";
import Watch1 from "../Assets/images/watch-1.png";
import Container from "../components/Container";

const Compareproducts = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Compare Products</title>
      </Helmet>
      <Breadcrumb title="Compare-Products" />
      <Container class1="compare-product-wrapper home-wrapper-2 py-2">
      <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src={Cross} alt="cross" className="position-absolute cross" />
                <div className="compare-product-image">
                  <img src={Watch1} className="img-fluid w-100 h-100" alt="watch-1" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title mt-1 mb-1">Titan Quartz Analog White Dial Leather Strap Watch for Men</h5>
                  <h6 className="price mt-2 mb-1">$200</h6>
                  <div className="product-detail mt-1 mb-1">
                    <h5>Brand</h5>
                    <p>Sony</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Type</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>SKU</h5>
                    <p>SK239856</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Availability</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Color</h5>
                    <Color/>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Size</h5>
                    <p>S , M , L</p>
                  </div>
                </div>
              </div>
            </div>
              <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src={Cross} alt="cross" className="position-absolute cross" />
                <div className="compare-product-image">
                  <img src={Watch1} className="img-fluid w-100 h-100" alt="watch-1" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title mt-1 mb-1">Titan Quartz Analog White Dial Leather Strap Watch for Men</h5>
                  <h6 className="price mt-2 mb-1">$ 200</h6>
                  <div className="product-detail mt-1 mb-1">
                    <h5>Brand</h5>
                    <p>Sony</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Type</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>SKU</h5>
                    <p>SK239856</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Availability</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Color</h5>
                    <Color/>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Size</h5>
                    <p>S , M , L</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src={Cross} alt="cross" className="position-absolute cross" />
                <div className="compare-product-image">
                  <img src={Watch1} className="img-fluid w-100 h-100" alt="watch-1" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title mt-1 mb-1">Titan Quartz Analog White Dial Leather Strap Watch for Men</h5>
                  <h6 className="price mt-2 mb-1">$200</h6>
                  <div className="product-detail mt-1 mb-1">
                    <h5>Brand</h5>
                    <p>Sony</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Type</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>SKU</h5>
                    <p>SK239856</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Availability</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Color</h5>
                    <Color/>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Size</h5>
                    <p>S , M , L</p>
                  </div>
                </div>
              </div>
            </div>
              <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src={Cross} alt="cross" className="position-absolute cross" />
                <div className="compare-product-image">
                  <img src={Watch1} className="img-fluid w-100 h-100" alt="watch-1" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title mt-1 mb-1">Titan Quartz Analog White Dial Leather Strap Watch for Men</h5>
                  <h6 className="price mt-2 mb-1">$ 200</h6>
                  <div className="product-detail mt-1 mb-1">
                    <h5>Brand</h5>
                    <p>Sony</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Type</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>SKU</h5>
                    <p>SK239856</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Availability</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Color</h5>
                    <Color/>
                  </div>
                  <div className="product-detail mt-1 mb-0">
                    <h5>Size</h5>
                    <p>S , M , L</p>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
      </Container>
    </>
  );
};

export default Compareproducts;
