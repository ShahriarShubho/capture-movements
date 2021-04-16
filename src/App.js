import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import LogIn from "./components/LogIn/LogIn/LogIn";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./components/LogIn/PrivateRoute/PrivateRoute";


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <Router>
     {loggedInUser.name}
      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/dashboard">
           <Dashboard/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
           <NotFound/>
          </Route>
        </Switch>
   </Router>
  </UserContext.Provider>
  );
}

export default App;
