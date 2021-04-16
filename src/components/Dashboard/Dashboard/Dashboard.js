import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import OrderList from '../OrderList/OrderList';
import AddServices from './AddServices/AddServices';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="row">
    <div className="col-md-3">
    <ul>
        <li>
          <Link to={`/home`}>Home</Link>
        </li>
        <li>
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
        </li>
      </ul>
    </div>

      <div className="col-md-8">
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/order`}>
        <OrderList/>
        </Route>
        <Route path={`${path}/addService`}>
            <AddServices/>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin/>
        </Route>
        <Route path={`${path}/manageService`}>
         <ManageService/>
        </Route>
      </Switch>
      </div>
    </div>
    );
};

export default Dashboard;