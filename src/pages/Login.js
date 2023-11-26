import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import FormInput from '../components/FormInput';


const Login = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <Breadcrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-2">
      <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className='text-center mb-4'>Login</h3>
                        
                        <form action='' className='d-flex flex-column gap-10'>
                            <FormInput className="mb-2"  type="email" name="email" placeholder='Email'/>
                           <FormInput  className="mb-0" type="password" password="" placeholder="Password"/>
                           
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
      </Container>
     
    </>
  )
}

export default Login