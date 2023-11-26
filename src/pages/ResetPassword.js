import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";
import Container from '../components/Container';
import FormInput from '../components/FormInput';

const ResetPassword = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Reset Password</title>
      </Helmet>
      <Breadcrumb title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-2">
      <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className='text-center mb-4'>Reset Password</h3>
                        <form action='' className='d-flex flex-column gap-10'>

                            <FormInput className="mb-2" type="password" name="password" placeholder='Password'/>
                   
                            <FormInput className="mb-0" type="password" name="confirmpassword" placeholder="Confirm Password"/>
                                  
    
                            <div>
                                <div className='d-flex align-items-center justify-content-center gap-10'>
                                    <button className='button border-0 mt-0'>Update</button>
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

export default ResetPassword;