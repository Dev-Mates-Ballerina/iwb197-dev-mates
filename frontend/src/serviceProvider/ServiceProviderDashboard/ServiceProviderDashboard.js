import React from 'react'
import SPNavbar from '../../components/SPNavbar'
import '../../css/ServiceProviderDashboard.css'
import proicon2 from '../../images/proicon2.png'

function ServiceProviderDashboard() {
  return (
    <div>
      <SPNavbar/>
      <div className='main-content'>
      <div class="dashboard-container-service-provider">
              <div class="dashboard-card-service-provider">
                <div className='dashboard-welcome'>
                  <h2 class="dashboard-heading">Welcome, Mahesh Bandara</h2>
                  <p6 class="dashboard-text">Manage your packages, bookings, and more from your dashboard.</p6>
                </div>
                <div class="profile-notification">
                  <img src ={proicon2}/>
                  <i class="fas fa-bell"></i>
                </div>
              </div>
    

              <div class="upcoming-bookings">
                <div class="upcoming-bookings-cards">
                    <h2>Upcoming Bookings</h2>
                    <p6>You have 3 upcoming bookings.</p6>
                    <a href="#" class="btn-primary">View Bookings</a>
                </div>
    

                <div class="upcoming-bookings-cards">
                    <h2>New Reviews</h2>
                    <p6>You have 2 new reviews to check.</p6>
                    <a href="#" class="btn-primary">View Reviews</a>
                </div>

                <div class="upcoming-bookings-cards">
                  <h2>Account Settings</h2>
                  <p6>Update your account information.</p6>
                  <a href="#" class="btn-primary">Update Info</a>
              </div>
              </div>

              <div class="packages-section">
                  <div class="packages-header">
                    <h2>Your Packages</h2>
                    <p6>Manage your event packages here.</p6>
                  </div>
                  <div class="packages-card">
                    <div class="packages-text">
                        <h2>Basic Photography Package</h2>
                        <p6>Price: Upto LKR 5000</p6>
                        <p6>Duration: 4 hours</p6>
                        <a href="#" class="btn-primary">Edit Package</a>
                    </div>
                    <div class="packages-text">
                        <h2>Premium Wedding Package</h2>
                        <p6>Price: Upto LKR 35000</p6>
                        <p6>Full Day</p6>
                        <a href="#" class="btn-primary">Edit Package</a>
                    </div>
                    <div class="packages-text">
                        <h2>Corporate Event Package</h2>
                        <p6>Price: Upto LKR 20000</p6>
                        <p6>Duration: 3 days</p6>
                        <a href="#" class="btn-primary">Edit Package</a>
                    </div>
                  </div>
                  <button class="add-package">+ Add New Package</button>
              </div>          
            </div>

      </div>
    </div>
  )
}

export default ServiceProviderDashboard
