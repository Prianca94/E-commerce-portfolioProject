import React from 'react'
import { Helmet } from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import Blogcard from "../components/blogcard";
import Container from '../components/Container';

const Blog = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs</title>
      </Helmet>
      <Breadcrumb title="Blogs" />
      <Container class1='blog-wrapper home-wrapper-2 py-2'>
      <div className="row">
            <div className="col-3">

            <div className="filter-card mb-2">
                <h3 className="filter-title">Find by Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className='gap-10'>
                <div className="row mb-3">
                  <div className="col-6">
                  <Blogcard/>
                  </div>
                  <div className="col-6">
                  <Blogcard/>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                  <Blogcard/>
                  </div>
                  <div className="col-6">
                  <Blogcard/>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
      </Container>
     
    </>
  )
}

export default Blog