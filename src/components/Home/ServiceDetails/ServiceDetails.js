import React from "react";

const ServiceDetails = ({ service }) => {
  return (
    <section className=' col-md-6 '>
        <div className="m-3 d-flex justify-content-between border">
        <div className="text-center align-self-center">
        <h5>{service.title}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, alias?</p>
      </div>
        <div >
        <img
          style={{ height: "170px" }}
          src="https://image.freepik.com/free-photo/groom-putting-wedding-ring-bride-finger-wedding-ceremony_182527-2447.jpg"
          alt={service.title}
        />
      </div>

        </div>
    </section>
  );
};

export default ServiceDetails;
