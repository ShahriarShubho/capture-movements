import React from "react";
import { Link } from "react-router-dom";
import './ChooseUs.css'

const ChooseUs = () => {
  return (
    <section className="bg-light pb-4">
      <h1 className="text-center p-5">Why To Choose Us</h1>
      <div className="container">
        <div className="row m-3">
          <div className="col-lg-6  smResponsive">
            <img
              className="img-fluid"
              src="https://image.freepik.com/free-vector/illustration-quality-control_53876-17826.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6  smResponsive align-self-center">
            <h3>QUALITY GUARANTEE</h3>
            <p>
              Nunc non tortor tincidunt, rutrum nibh in, gravida leo. Sed
              pulvinar lectus vitae sem consequat, lobortis sodales neque
              tincidunt. Nullam vel erat urna. Ut tincidunt facilisis ipsum a
              ullamcorper.
            </p>
            <Link className="text-decoration-none text-dark font-weight-bold">
              READ MORE
            </Link>
          </div>
          <div className="col-lg-6  smResponsive align-self-center">
            <h3>CORPORATE SERVICES</h3>
            <p>
              Nunc non tortor tincidunt, rutrum nibh in, gravida leo. Sed
              pulvinar lectus vitae sem consequat, lobortis sodales neque
              tincidunt. Nullam vel erat urna. Ut tincidunt facilisis ipsum a
              ullamcorper.
            </p>
            <Link className="text-decoration-none text-dark font-weight-bold">
              READ MORE
            </Link>
          </div>
          <div className="col-lg-6 smResponsive">
            <img
              className="img-fluid"
              src="https://image.freepik.com/free-photo/abstract-app-social-web-service-object_1418-520.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 smResponsive">
            <img
              className="img-fluid"
              src="https://image.freepik.com/free-photo/businesswoman-call-center-office_1098-984.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 smResponsive align-self-center">
            <h3>CUSTOMER SERVICE</h3>
            <p>
              Nunc non tortor tincidunt, rutrum nibh in, gravida leo. Sed
              pulvinar lectus vitae sem consequat, lobortis sodales neque
              tincidunt. Nullam vel erat urna. Ut tincidunt facilisis ipsum a
              ullamcorper.
            </p>
            <Link className="text-decoration-none text-dark font-weight-bold">
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
