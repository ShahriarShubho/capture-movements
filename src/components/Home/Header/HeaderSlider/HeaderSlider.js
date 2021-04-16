import { Carousel } from "react-bootstrap";
import React from "react";

const HeaderSlider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ height: "350px" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1608408207651-86ddc7413e1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhbmRzY2FwZSUyMHdlZGRpbmclMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Wedding Photos</h3>
          <p>We Provide wedding ceremony function photo</p>
          <button className="btn btn-primary">Get Booking</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          style={{ height: "350px" }}
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/beautiful-viewpoint-koh-nangyuan-island-surat-thani-thailand_335224-1097.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>  
        <img
          style={{ height: "350px" }}
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/beautiful-koh-nangyuan-island-surat-thani-thailand_335224-1084.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderSlider;
