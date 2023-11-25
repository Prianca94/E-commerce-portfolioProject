import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb";
import Productcard from "../components/Productcard";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Product = () => {
  const [orderedProduct] = useState(true);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product</title>
      </Helmet>
      <Breadcrumb title="Product" />
      <div className="main-product-wrapper p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
        <section className="description-wrapper home-wrapper-2 py-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div><h4 className="px-3 mb-2">Description</h4></div>
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
                <div className="review-form bg-white p-3 mb-0">
                  <h4>Write a review</h4>
                  <form action="" className="d-flex flex-column gap-10">
                    <div>
                      <ReactStars count={5} size={20} value={3} edit={false} activeColor="#ffd700" />
                    </div>
                    <div>
                      {" "}
                      <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Comments" col="10" rows="2"></textarea>
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
                      <ReactStars count={5} size={20} value={3} edit={false} activeColor="#ffd700" />
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
