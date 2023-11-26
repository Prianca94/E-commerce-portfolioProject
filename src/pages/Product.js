import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb";
import Productcard from "../components/Productcard";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import watchimg from "../Assets/images/camera.jpg";
import Color from "../components/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare, faHeart } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { AiOutlineFontSize } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";

const Product = () => {
  const [orderedProduct] = useState(true);

  const props = { width: 450, height: 500, zoomWidth: 450, img: watchimg };

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product</title>
      </Helmet>
      <Breadcrumb title="Product" />
      <div className="main-product-wrapper home-wrapper-2 p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="primary-product-image bg-white d-flex flex-wrap p-3 gap-10">
                <div>
                  <img src={watchimg} alt="watch-im" className="img-fluid" />
                </div>
                <div>
                  <img src={watchimg} alt="watch-im" className="img-fluid" />
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="details-border d-flex align-items-center justify-content-between">
                  <h3 className="title mt-2">Camera for professional adults high dimension 5.0
                  </h3>
                  <FaCopy className="clipboard" onClick={()=>copyToClipboard("http://localhost:3000/static/media/camera.fbcd4f63543fbf0ea4e8.jpg")}/>
                </div>
                <div className="details-border">
                  <p className="price mb-0">$ 800</p>
                  <div className="d-flex align-items-center gap-10 mt-1 mb-1">
                    <ReactStars count={5} size={20} value={3} edit={false} activeColor="#ffd700" />
                    <p className="review-p mb-0">(2 Reviews)</p>
                  </div>
                  <a className="review-btn mb-2" href="#review">
                    Write a review
                  </a>
                </div>
                <div className="details-border">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand</h3>
                    <p className="product-title">Sony</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type</h3>
                    <p className="product-title">Camera</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category</h3>
                    <p className="product-title">Camera</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags</h3>
                    <p className="product-title">Camera</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability</h3>
                    <p className="product-title">In Stock</p>
                  </div>
                  <div className="d-flex flex-column gap-10 my-2">
                    <h3 className="product-heading mt-1 mb-1">Size</h3>
                    <div className="d-flex flex-wrap gap-3 border-1 bg-white">
                      <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10  my-1">
                    <h3 className="product-heading  mt-1 mb-1">Color</h3>
                    <Color />
                  </div>
                  <div className="quantity d-flex  flex-row gap-10 my-1">
                    <h3 className="product-heading  mt-1 mb-1">Quantity</h3>
                    <div className="mt-0">
                      <input type="number" name="" min={1} max={10} style={{ width: "50px" }} className="form-control" />
                    </div>

                    <div className="d-flex align-items-center gap-30">
                      <div className="d-flex align-items-center gap-10">
                        <button className="button border-0 mt-0 ms-4">Add to Cart</button>
                        <Link to="/signup" className="button signup mt-0">
                          Buy now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="addlist d-flex align-items-center gap-15 my-1 mt-3">
                    <div className="">
                      <FontAwesomeIcon className="fontawesomeclass fs-6 me-2" icon={faHeart} />
                      <a href="#wishlist">Add to Wishlist</a>
                    </div>
                    <div className="">
                      <FontAwesomeIcon className="fontawesomeclass fs-6 me-2" icon={faCodeCompare} />
                      <a href="#compare">Add to Compare</a>
                    </div>
                  </div>
                  <div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            
                          <button className="accbtn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          <MdOutlineLocalShipping className="fs-5 me-3"/> Shipping & Returns
                          </button>
                        </h2>
                        <div id="flush-collapseOne" className="accbody accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            <p>
                              Free Shipping and returns available on all orders.
                              <br />
                              All orders are shipped in 5-10 business days
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button className="accbtn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          <SiMaterialdesignicons className="fs-6 me-3"/>  Materials
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accbody accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                     <p>High resolution (2,360K dot) OLED Live View Finder and rear touch enabled 3 inch tilt/swivel LCD display (1,040 dot) are clear even in bright sunlight, Image sensor size 17.3 x 13.0 mm (in 4:3 aspect ratio)</p>     </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                          <button className="accbtn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          <AiOutlineFontSize className="fs-5 me-3"/>  Dimensions
                          </button>
                        </h2>
                        <div id="flush-collapseThree" className="accbody accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                     <p>16 megapixel Micro Four Thirds sensor with no low pass filter to confidently capture sharp images with a high dynamic range and artifact free performance; WiFi enabled</p>     </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="description-wrapper home-wrapper-2 py-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div>
                  <h4 className="px-3 mb-2">Description</h4>
                </div>
                <div className="bg-white p-3 mb-0">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="reviews-wrapper home-wrapper-2 py-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h4 className="p-3 mb-0 mt-0">Reviews</h4>
                <div className="review-inner-wrapper mt-0">
                  <div className="review-top d-flex align-items-end justify-content-between bg-white p-3">
                    <div className="">
                      <h4 className="mb-2">Customer Reviews</h4>
                      <div className="d-flex gap-10 align-items-center">
                        <ReactStars count={5} size={20} value={3} edit={false} activeColor="#ffd700" />
                        <p className="mb-0">Based on true reviews</p>
                      </div>
                    </div>
                    {orderedProduct ? (
                      <div>
                        <Link className="text-dark text-decoration-underline">Write a Review</Link>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="review-form bg-white p-3 mb-2" id="review">
                    <h4 className="mt-2 mb-2">Write a review</h4>
                    <form action="" className="d-flex flex-column gap-10">
                      <div>
                        <ReactStars count={5} size={20} value={3} edit={false} activeColor="#ffd700" />
                      </div>
                      <div>
                        {" "}
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comments" col="10" rows="2"></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <Link className="button mt-0">Submit review</Link>
                      </div>
                    </form>
                  </div>
                  <div className="reviews bg-white p-3 mt-0">
                    <div className="review">
                      <div className="d-flex align-items-center gap-10">
                        <h4 className="mb-0">Priyanka</h4>
                        <ReactStars count={5} size={20} value={3} edit={true} activeColor="#ffd700" />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-products-wrapper blog-wrapper home-wrapper-2 py-2 p-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h5 className="section-heading">Our Popular Products</h5>
              </div>
              <Productcard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Product;
