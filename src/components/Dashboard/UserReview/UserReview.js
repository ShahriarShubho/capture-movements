import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import { UserContext } from '../../../App';

const UserReview = () => {
    const [loggedInUser] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const reviewData = {
            name : data.name,
            email : loggedInUser.email,
            image : loggedInUser.image,
            ratting : data.ratting,
            description : data.description,
        }
        fetch("https://powerful-badlands-46047.herokuapp.com/addReview", { 
            method : 'POST',
            headers : { "Content-Type": "application/json"},
            body : JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                swal("Thank U!", "Your Review is added", "success");
            }
        })
    };

    return (
        <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <strong>Your Name</strong><br/>
      <input placeholder="Enter Your Name" {...register("name", { required: true })} /><br/>
      {errors.name && <span>This field is required</span>} <br/>

        <strong>Your Opinion</strong><br/>
      <input placeholder="Good/Bad/Batter/Best" {...register("ratting", { required: true })} /><br/>
      {errors.ratting && <span>This field is required</span>} <br/>

        <strong>Short Description : </strong><br/>
      <textarea placeholder="Description" {...register("description", { required: true })}></textarea><br/>
      {errors.description && <span>This field is required</span>} <br/>
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default UserReview;