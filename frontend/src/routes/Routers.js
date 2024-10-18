import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';  // Ensure this path is correct
import CreateEvent from '../pages/NewEvent/CreateEvent';
import Category from '../pages/NewEvent/Category';
import ResourcePerson from '../pages/NewEvent/ResourcePerson';
import Charity from '../pages/NewEvent/Charity';
import Budget from '../pages/NewEvent/Budget';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Photographer from '../pages/ResourcePersons/Photographer';
import Entertainment from '../pages/ResourcePersons/Entertainment';
import Locations from '../pages/ResourcePersons/Locations';
import Catering from '../pages/ResourcePersons/Catering';
import Electronics from '../pages/ResourcePersons/Electronics';
import Vehicles from '../pages/ResourcePersons/Vehicles';
import Decorations from '../pages/ResourcePersons/Decorations';
import Analytics from '../pages/Analytics/Analytics';
import Help from '../pages/Help/Help';
import ServiceProviderDashboard from '../serviceProvider/ServiceProviderDashboard/ServiceProviderDashboard';
import Bookings from '../serviceProvider/Bookings/Bookings';
import ServiceProvider from '../serviceProvider/ServiceProvider/ServiceProvider';
import Account from '../pages/Account/Account';
import Accounts from '../serviceProvider/Accounts/Accounts';
import LoginS from '../serviceProvider/Auth/LoginS';
import RegisterS from '../serviceProvider/Auth/RegisterS';

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes inside the Routes component */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/newEvent" element={<CreateEvent />} />
        <Route exact path="/newEvent/Category" element={<Category />} />
        <Route exact path="/newEvent/ResourcePerson" element={<ResourcePerson />} />
        <Route exact path="/newEvent/Charity" element={<Charity />} />
        <Route exact path="/newEvent/Budget" element={<Budget />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/newEvent/ResourcePerson/Photographers" element={<Photographer />} />
        <Route exact path="/newEvent/ResourcePerson/Entertainment" element={<Entertainment />} />
        <Route exact path="/newEvent/ResourcePerson/Locations" element={<Locations />} />
        <Route exact path="/newEvent/ResourcePerson/Catering" element={<Catering />} />
        <Route exact path="/newEvent/ResourcePerson/Electronics" element={<Electronics />} />
        <Route exact path="/newEvent/ResourcePerson/Vehicles" element={<Vehicles />} />
        <Route exact path="/newEvent/ResourcePerson/Decorations" element={<Decorations />} />
        <Route exact path="/analytics" element={<Analytics />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/serviceProviderDashboard" element={<ServiceProviderDashboard />} />
        <Route exact path="/bookings" element={<Bookings />} />
        <Route exact path="/serviceProvider" element={<ServiceProvider />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/accounts" element={<Accounts />} />
        <Route exact path="/serviceProvider/login" element={<LoginS />} />
        <Route exact path="/serviceProvider/register" element={<RegisterS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
