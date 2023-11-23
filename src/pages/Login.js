import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <Breadcrumb title="Login" />
      <div className="login-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className='text-center mb-4'>Login</h3>
                        <form action='' className='d-flex flex-column gap-10'>
                            <div className='mb-2'>
                                <input type="email" name="email" placeholder='Email' className="form-control" />
                            </div>
                            <div className='mb-0'>
                                <input type="password" password="" placeholder="Password" className="form-control" />
                            </div>
                            <div>
                                <Link className='forgotpass mb-4' to="/forgot-password">Forgot Password ?</Link>
                                <div className='d-flex align-items-center gap-10'>
                                    <button className='button border-0 mt-0'>Login</button>
                                    <Link to="/signup" className='button signup mt-0'>Sign up</Link>
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

export default Login