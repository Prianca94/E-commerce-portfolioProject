import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import FormInput from "../components/FormInput";

const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forgot Password </title>
      </Helmet>
      <Breadcrumb title="Forgot Password" />
      <Container class1="login-wrapper home-wrapper-2 py-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-4">Reset Your Password</h3>
              <p className="text-center mb-2 mt-2">We will send you an email to reset password</p>
              <form action="" className="d-flex flex-column gap-10">
                <FormInput className="mb-2" type="email" name="email" placeholder="Email" />
               
               
                <div>
                  <div className="d-flex flex-column gap-10 align-items-center">
                    <button type="submit" className="button border-0 mt-0">
                      Submit
                    </button>

                    <Link to="/login" className="forgotpass mb-4">
                      Cancel
                    </Link>
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

export default ForgotPassword;
