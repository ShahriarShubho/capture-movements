import React from "react";
import { useHistory } from "react-router";

const ServiceDetails = ({ service }) => {
  const { name, description, price, img, _id } = service;

  const history = useHistory();
  const handleClick = (bookingId) => {
    history.push(`/dashboard/booking/${bookingId}`);
  };

  return (
    <section className=" col-md-6 ">
      <div
        onClick={() => handleClick(_id)}
        className="m-3 d-flex justify-content-between border"
      >
        <div className="text-center align-self-center">
          <h5>{name}</h5>
          <p>{description}</p>
          <strong>Price : ${price}</strong>
        </div>
        <div>
          <img
            style={{ height: "170px", width: "220px" }}
            src={img}
            alt={name}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
