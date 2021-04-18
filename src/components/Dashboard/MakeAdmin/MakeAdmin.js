import React, { useState } from "react";
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email
        }
        fetch("http://localhost:5000/makeAdmin", {
            method: "POST",
            headers: { 'Content-Type' : 'application/json'},
            body : JSON.stringify(adminData)
        })
        .then(res => res.json())
        .then(success => console.log("success"))
    }

  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
        <strong>Name  : </strong>
      <input className="mb-3" placeholder="Enter Admin Name" {...register("name", { required: true })} />
      {errors.name && <span className="text-danger">name field is required</span>} <br/>
      <strong>Email : </strong>
      <input className="mb-3" placeholder="Enter Admin Email address" {...register("email", { required: true })} /> 
      {errors.email && <span className="text-danger">Must Add a Email</span>} <br/>
      
      <input type="submit" />
    </form>
    </div>
  );
};

export default MakeAdmin;
