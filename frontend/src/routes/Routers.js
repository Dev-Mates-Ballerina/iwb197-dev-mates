import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';  // Ensure this path is correct
import CreateEvent from '../pages/NewEvent/CreateEvent';
import Category from '../pages/NewEvent/Category';
import ResourcePerson from '../pages/NewEvent/ResourcePerson';
import Charity from '../pages/NewEvent/Charity';
import Budget from '../pages/NewEvent/Budget';
import Analytics from '../pages/Analytics/Analytics';
import Help from '../pages/Help/Help';
import ServiceProviderDashboard from '../serviceProvider/ServiceProviderDashboard/ServiceProviderDashboard';
import Bookings from '../serviceProvider/Bookings/Bookings';
import ServiceProvider from '../serviceProvider/ServiceProvider/ServiceProvider';

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
        <Route exact path="/analytics" element={<Analytics />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/serviceProviderDashboard" element={<ServiceProviderDashboard />} />
        <Route exact path="/bookings" element={<Bookings />} />
        <Route exact path="/serviceProvider" element={<ServiceProvider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
