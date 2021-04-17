import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const Booking = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext)
  const { id } = useParams();
  const [booking, setBooking] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/bookingById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);

  return (
    <div>
      <form className="from-group">
      <input
        id="name"
          name="name"
          type="text"
          class="form-control mb-2"
          value={loggedInUser.name}
        />
        <input
        id="email"
         name="name"
          type="text"
          class="form-control mb-2"
          value={loggedInUser.email}
        />
        <input
        id="serviceName"
         name="serviceName"
          type="text"
          class="form-control mb-2"
          value={booking.name}
        />
        <input
        id="price"
        name="price"
          type="price"
          class="form-control mb-2"
          value={"$"+booking.price}
        />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <ProcessPayment/>
      
    </div>
  );
};

export default Booking;
