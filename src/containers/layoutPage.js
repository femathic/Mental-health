import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { AddConsultant, RemoveConsultant } from '../store/actions/consultant';
// import { useDispatch, useSelector } from 'react-redux';
import HomePage from './homePage';
import ConsultantForm from './consultantForm';


const LayoutPage = () => (
  <div className="m-0 p-0">
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" render={() => <HomePage />} />
      <Route path="/consult" render={() => <ConsultantForm />} />
    </Switch>
  </div>
);


export default LayoutPage;
