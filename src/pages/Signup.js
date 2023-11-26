import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import FormInput from "../components/FormInput";

const Signup = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign up</title>
      </Helmet>
      <Breadcrumb title="Sign up" />
      <Container class1="login-wrapper home-wrapper-2 py-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-4">Create Account</h3>
              <form action="" className="d-flex flex-column gap-10">
                <FormInput type="text" name="name" placeholder="Name" className="mb-1 mt-0" />

                <FormInput type="email" name="email" placeholder="Email" className="mb-1" />

                <FormInput type="tel" name="mobile" placeholder="Mobile Number" className="mb-1" />

                <FormInput type="password" password="" placeholder="Password" className="mb-1" />

                <div>
                  <div className="d-flex align-items-center justify-content-center">
                    <button className="button border-0 mt-1">Create</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
