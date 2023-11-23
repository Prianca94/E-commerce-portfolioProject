import React from 'react'
import { Helmet } from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

const Contact = () => {
  return (<>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Contact Us</title>
  </Helmet>
  <Breadcrumb title="Contact" />
  <div className="contact-wrapper home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2483270340067!2d72.85146157461992!3d22.719009627589582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5b78d1677645%3A0xbc22bb275b1f1027!2sPrime%20Residency%2C%20Manjipura%20Rd%2C%20Subhash%20Nagar%2C%20Manjipura%20Part%2C%20Nadiad%2C%20Gujarat%20387002!5e0!3m2!1sen!2sin!4v1700634042453!5m2!1sen!2sin" width="600" height="300" style={{"border":"0px"}} className="w-100" title="m" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">

        </iframe>
        </div>

      </div>
      
        <div className="col-12">
          <div className='contact-inner-wrapper d-flex justify-content-between'>
            <div className=''>
            <h4 className='contact-title'>Contact</h4>
            <form action='' className='d-flex flex-column gap-10'>
              <div> <input type="text" className="form-control" placeholder='Name' /></div>
              <div> <input type="text" className="form-control" placeholder='Email'/></div>
              <div> <input type="tel" className="form-control" placeholder='Mobile Number'/></div>
              <div> <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Comments' col="10" rows="3"></textarea></div>
             <div><Link className='button mt-0'>Send</Link></div>
            </form>
            </div>
            <div className=''>
            <h4 className='contact-title'>Get in touch with us</h4>
            <div>
              <ul className='contact-details ps-0'>
                <li className='mb-3 d-flex align-items-center gap-10'><IoHomeOutline className="fs-5"/>
                <address className='mb-1'>3,Prime Residency , Manjipura Road , Nadiad</address></li>
                <li className='mb-3  d-flex align-items-center gap-10'>
                  <MdOutlineLocalPhone className="fs-5"/>
                  <a href="tel:+91 8234153489">+91 8234153489</a>
                  </li>
                <li className='mb-3  d-flex align-items-center gap-10'>
                  <MdOutlineMailOutline className="fs-5"/>
                  <a href="mailto:azeebazaar@gmail.com">azeebazaar@gmail.com</a>
                  
                  </li>
                <li className='mb-3  d-flex align-items-center gap-10'>
                  <IoEyeOutline className="fs-5"/>
                  <p className='mb-1'>Mon - Fri 8 AM to 10 PM</p>
                  </li>
              </ul>
            </div>
          
          </div>
        </div>
      </div>
    </div>

  </div>
  </>
  )
}

export default Contact