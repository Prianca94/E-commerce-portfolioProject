import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumb mb-2"> <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 mt-2">
              <Link
                className="text-dark breadcrumb-title"
                
                to="/">
                Home /{" "}
              </Link>{" "}
              
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
