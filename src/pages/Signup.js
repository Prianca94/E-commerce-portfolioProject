import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";

const Signup = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign up</title>
      </Helmet>
      <Breadcrumb title="Sign up" />
      <div className="login-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-4">Create Account</h3>
                <form action="" className="d-flex flex-column gap-10">
                  <div className="mb-1 mt-0">
                    <input type="text" name="name" placeholder="Name" className="form-control" />
                  </div>
                  <div className="mb-1">
                    <input type="email" name="email" placeholder="Email" className="form-control" />
                  </div>
                  <div className="mb-1">
                    <input type="tel" name="mobile" placeholder="Mobile Number" className="form-control" />
                  </div>
                 
                  <div className="mb-1">
                    <input type="password" password="" placeholder="Password" className="form-control" />
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="button border-0 mt-1">Create</button>
            
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
