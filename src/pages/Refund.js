import React from 'react';
import { Helmet } from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'


const Refund = () => {
  return (
    <>
    
    <Helmet>
    <meta charSet="utf-8" />
    <title>Refund</title>
  </Helmet>
  <Breadcrumb title="Refund" />
  <section className='policy-wrapper home-wrapper-2 py-2'>
    <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className="policy">
                    
                </div>
            </div>
        </div>
    </div>

  </section>
 
    </>
  )
}

export default Refund