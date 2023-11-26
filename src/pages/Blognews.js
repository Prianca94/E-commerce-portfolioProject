import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import Container from '../components/Container';


const Blognews = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Single Blog</title>
      </Helmet>
      <Breadcrumb title="Single Blog" />
      <Container class1='blognews-wrapper home-wrapper-2 py-2 px-2'>
      <div className="row">
            <div className="col-12">
              <Link className="d-flex align-items-center gap-10" to="/blog">
                <IoMdArrowRoundBack className='fs-5'></IoMdArrowRoundBack> Go back to blogs</Link>
              <h3 className='title'>A Beautiful Sunday Morning</h3>
              <img src="" alt="blog" className='img-fluid w-100 my-4'/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              
            </div>
          </div>
      </Container>
    
    </>
  )
}

export default Blognews