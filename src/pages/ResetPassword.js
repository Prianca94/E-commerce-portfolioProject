import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";

const ResetPassword = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Reset Password</title>
      </Helmet>
      <Breadcrumb title="Reset Password" />
      <div className="login-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className='text-center mb-4'>Reset Password</h3>
                        <form action='' className='d-flex flex-column gap-10'>
                            <div className='mb-2'>
                                <input type="password" name="password" placeholder='Password' className="form-control" />
                            </div>
                            <div className='mb-0'>
                                <input type="password" name="confirmpassword" placeholder="Confirm Password" className="form-control" />
                            </div>
                            <div>
                                <div className='d-flex align-items-center justify-content-center gap-10'>
                                    <button className='button border-0 mt-0'>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
     
    </>
  )
}

export default ResetPassword;