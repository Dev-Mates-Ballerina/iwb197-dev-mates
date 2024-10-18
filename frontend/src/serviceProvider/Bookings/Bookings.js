import React, { useEffect, useState } from 'react';
import SPNavbar from '../../components/SPNavbar';
import '../../css/Bookings.css';

function Bookings() {
  const [bookings, setBookings] = useState([]); // State to hold bookings data

  // Fetch bookings data from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:8083/budget'); // Replace with your bookings endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        const data = await response.json();
        setBookings(data); // Set fetched bookings to state
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings(); // Call the fetch function
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <SPNavbar />
      <div className="main-content">
        <div className="bookings-page">
          <h2>Bookings Page</h2>
          <div className="booking-page-cards">
            <div className='active-bookings'>
              <p className='ordersP'>Active</p>
              <i className="fa fa-bars" aria-hidden="true"></i>
              <h6 className='ordersH6'>{bookings.length}</h6>
            </div>
            <div className='pending-bookings'>
              <p className='ordersP'>Pendings</p>
              <i className="fa fa-exclamation" aria-hidden="true"></i>
              <h6 className='ordersH6'>{bookings.filter(booking => booking.status === 'Pending').length}</h6>
            </div>
            <div className='active-bookings'>
              <p className='ordersP'>Canceled</p>
              <i className="fa fa-times" aria-hidden="true"></i>
              <h6 className='ordersH6'>{bookings.filter(booking => booking.status === 'Canceled').length}</h6>
            </div>
            <div className='active-bookings'>
              <p className='ordersP'>Fulfilled</p>
              <i className="fa fa-check" aria-hidden="true"></i>
              <h6 className='ordersH6'>{bookings.filter(booking => booking.status === 'Fulfilled').length}</h6>
            </div>
          </div>
          <div className="recent-bookings">
            <h4 className="recent-bookings-h4">Recent Bookings</h4>
            <table className='recent-booking-table'>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Client</th>
                  <th>Email</th>
                  <th>Full Budget</th>
                  <th>Contact No</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>LKR {booking.price}</td>
                    <td>{booking.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
