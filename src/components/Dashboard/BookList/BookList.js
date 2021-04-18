import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../../../App";

const BookList = () => {
  const [booking, setBooking] = useState();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch("https://powerful-badlands-46047.herokuapp.com/booking?email=" + loggedInUser.email)
      .then((response) => response.json())
      .then((data) => setBooking(data));
  }, []);
  return (
      <div >
    <div className="row">
      {booking?.map(booking => 
      <div className="col-md-6">
      <Card className="m-3">
        <Card.Img className="w-100" variant="top" src={booking.image} />
        <Card.Body>
          <Card.Title>{booking.serviceName}</Card.Title>
          <Card.Text>{booking.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Status update : {booking.status}</small>
        </Card.Footer>
      </Card>
      </div>)}
    </div>
    </div>
  );
};

export default BookList;
