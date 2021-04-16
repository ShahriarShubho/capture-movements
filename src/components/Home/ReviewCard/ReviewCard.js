import React from "react";

const ReviewCard = (props) => {
  const { name, title, img } = props.review;
  let images = img
  if(img === null) {
    images = "https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1618487109~hmac=d95bdac1cdc2ec42d08eec0c1e24200e"
  }
  return (
    <section className ="com-md-4">
          <div class="card text-center m-3 p-3" style={{ width: "16rem" }}>
      <img src={images}  onerror="https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1618487109~hmac=d95bdac1cdc2ec42d08eec0c1e24200e"  style={{ width: "50px", margin : "auto" }} class="card-img-top" alt="Your email has no pictur"></img>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <blockquote class="blockquote mb-0">
          <p>A well-known quote, contained in a blockquote element.</p>
          <footer class="blockquote-footer">{name}</footer>
        </blockquote>
      </div>
    </div>
    </section>
  );
};

export default ReviewCard;
