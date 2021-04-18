import React, { useContext, useEffect } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import BookList from "../BookList/BookList";
import Booking from "../Booking/Booking";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageService from "../ManageService/ManageService";
import OrderList from "../OrderList/OrderList";
import UserReview from "../UserReview/UserReview";
import AddServices from "../AddServices/AddServices";
import "./Dashboard.css";
import PrivateRoute from "../../LogIn/PrivateRoute/PrivateRoute";
import { UserContext } from "../../../App";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  let { path, url } = useRouteMatch();
  const { id } = useParams();
  const [isAdmin, setIsAdmin] = React.useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/isAdmin", {
      method: "POST",
      headers: { 'Content-Type' : 'application/json'},
      body : JSON.stringify({email : loggedInUser.email})
  })
  .then(res => res.json())
  .then(data => setIsAdmin(data))
  }, [])

  return (
    <div className="row container-fluid">
      <div className="col-md-2 sidebar">
        <h1>{id}</h1>
        <ul>
          <li>
            <Link to={`/home`}>Home</Link>
          </li>
          { isAdmin ? <div><li>
            <Link to={`${url}/order`}>OrderList</Link>
          </li>
          <li>
            <Link to={`${url}/addService`}>Add Service</Link>
          </li>
          <li>
            <Link to={`${url}/makeAdmin`}>Make Admin</Link>
          </li>
          <li>
            <Link to={`${url}/manageService`}> Manage Service</Link>
          </li></div> :
           <div>
                       <li>
            <Link to={`${url}/booking`}>Booking</Link>
          </li>
          <li>
            <Link to={`${url}/bookList`}>Booked List</Link>
          </li>
          <li>
            <Link to={`${url}/userReview`}>Review</Link>
          </li>
          </div> }
        </ul>
      </div>

      <div className="col-md-10">
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <PrivateRoute path={`${path}/booking/:id`}>
            <Booking />
          </PrivateRoute>
          <PrivateRoute path={`${path}/bookList`}>
            <BookList />
          </PrivateRoute>
          <PrivateRoute path={`${path}/userReview`}>
            <UserReview />
          </PrivateRoute>
          <Route path={`${path}/order`}>
            <OrderList />
          </Route>
          <Route path={`${path}/addService`}>
            <AddServices />
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/manageService`}>
            <ManageService />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
