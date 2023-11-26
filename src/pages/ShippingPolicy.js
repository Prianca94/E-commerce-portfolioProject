import React from 'react';
import { Helmet } from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container';


const ShippingPolicy = () => {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Shipping Policy</title>
  </Helmet>
  <Breadcrumb title="ShippingPolicy" />
  <Container class1='policy-wrapper home-wrapper-2 py-2'>
  <div className="row">
            <div className="col-12">
                <div className="policy">
                    
                </div>
            </div>
        </div>

  </Container>
 
 
    </>
  )
}

export default ShippingPolicy