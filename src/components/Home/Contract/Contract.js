import React from "react";

const Contract = () => {
  return (
    <div className="bg-light p-5">
      <h1 className="text-center">Contract Us</h1>
      <form className="w-50 m-auto">
        <div class="form-group ">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputNumber">Number</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputNumber"
            placeholder="Your Number"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputTextAria">Your Message</label>
          <br />
          <textarea
            name="message"
            class="form-control"
            id="exampleInputTextAria"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary float-right">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contract;
