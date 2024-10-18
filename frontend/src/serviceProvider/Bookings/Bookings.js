import React from 'react'
import SPNavbar from '../../components/SPNavbar'
import '../../css/Bookings.css'

function Bookings() {
  return (
    <div>
      <SPNavbar/>
      <div className="main-content">
      <div class="bookings-page">
        <h2>Bookings Page</h2>
        <div class="booking-page-cards">
            <div class='active-bookings'>
                <p class='ordersP'>Active</p>
                <i class="fa fa-bars" aria-hidden="true"></i>
                <h6 class='ordersH6'>100</h6>
            </div>
            <div class='pending-bookings'>
                <p class='ordersP'>Pendings</p>
                <i class="fa fa-exclamation" aria-hidden="true"></i>
                <h6 class='ordersH6'>15</h6>
            </div>
            <div class='cansel-bookings'>
                <p class='ordersP'>Canceled</p>
                <i class="fa fa-times" aria-hidden="true"></i>
                <h6 class='ordersH6'>2</h6>
            </div>
            <div class='fullfilled-bookings'>
                <p class='ordersP'>Fullfilled</p>
                <i class="fa fa-check" aria-hidden="true"></i>
                <h6 class='ordersH6'>300</h6>
            </div>
        </div>
        <div class="recent-bookings">
            <h4 class="recent-bookings-h4">Recent Bookings</h4>
            <table class='recent-booking-table'>
                <thead>
                <tr>
                    <th>Booking ID</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>30th of December</td>
                    <td>Michael Doe</td>
                    <td>LKR 35,000</td>
                    <td><button class='pButton'>Paid</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>29th of December</td>
                    <td>John Doe</td>
                    <td>LKR 25,000</td>
                    <td><button class='upButton'>Unpaid</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>28th of Novemebr</td>
                    <td>Emily Johnson</td>
                    <td>LKR 100,000</td>
                    <td><button class='pButton'>Paid</button></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>27th of December</td>
                    <td>Sarah Johnson</td>
                    <td>LKR 75,000</td>
                    <td><button class='pButton'>Paid</button></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>26th of Novemebr</td>
                    <td>Michael Doe</td>
                    <td>LKR 75,000</td>
                    <td><button class='upButton'>Unpaid</button></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>25th of December</td>
                    <td>Emily Johnson</td>
                    <td>LKR 50,000</td>
                    <td><button class='pButton'>Paid</button></td>
                </tr>
                </tbody>
            </table>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Bookings
