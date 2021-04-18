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
import { Navbar, Nav } from "react-bootstrap";
import Footer from "../../Home/Footer/Footer";

const Dashboard = () => {
  const [loggedInUser] = useContext(UserContext)
  let { path, url } = useRouteMatch();
  const [isAdmin, setIsAdmin] = React.useState(false)

  useEffect(() => {
    fetch("https://powerful-badlands-46047.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { 'Content-Type' : 'application/json'},
      body : JSON.stringify({email : loggedInUser.email})
  })
  .then(res => res.json())
  .then(data => setIsAdmin(data))
  
  }, [])

  return (
    <section>
   <Navbar  bg="light" expand="lg">
  <Navbar.Brand as={Link} to="/home"><img style={{ height : "80px"}} src="https://www.capturethemoment4.me/wp-content/uploads/2017/10/Framed-Capture-the-Moment-Logo.png" alt=""/></Navbar.Brand>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-3 font-weight-bold">
      <Nav.Link>{loggedInUser.name}</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    <div className="row container-fluid bg-light">
      <div className="col-md-2 sidebar">
        <ul>
          <li>
            <Link className="linkStyle" to={`/home`}>Home</Link>
          </li>
          { isAdmin ? <div><li>
            <Link className="linkStyle" to={`${url}/order`}>OrderList</Link>
          </li>
          <li>
            <Link className="linkStyle" to={`${url}/addService`}>Add Service</Link>
          </li>
          <li>
            <Link className="linkStyle" to={`${url}/makeAdmin`}>Make Admin</Link>
          </li>
          <li>
            <Link className="linkStyle" to={`${url}/manageService`}> Manage Service</Link>
          </li></div> :
           <div>
                       <li>
            <Link className="linkStyle" to="#">Booking</Link>
          </li>
          <li>
            <Link className="linkStyle" to={`${url}/bookList`}>Booked List</Link>
          </li>
          <li>
            <Link className="linkStyle" to={`${url}/userReview`}>Review</Link>
          </li>
          </div> }
        </ul>
      </div>

      <div className="col-md-10">
        <Switch>
          <Route exact path={path}>
            <div className="text-center mt-5">
            <h2>Hello, {loggedInUser.name}</h2>
            <h3>Welcome To Dashboard</h3>
            <h5>Please, select a topic what you choose!!!!! <br/> Given the left sitebar</h5>
         
            </div>
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
    <Footer/>
    </section>
  );
};

export default Dashboard;
