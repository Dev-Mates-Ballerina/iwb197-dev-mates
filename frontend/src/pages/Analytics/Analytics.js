import React from 'react'
import Navbar from '../../components/Navbar'
import '../../css/Analytics.css'

function Analytics() {
  return (
    <div>
      <Navbar/>
      <div className="main-content">
        <section class="main">
        <div className='analytics-main'>
          <div class="main-top">
            <h1>Event Analytics</h1>
          </div>
          <div class="main-skills">
            <div class="card">
              <i class="fas fa-calendar-alt"></i>
              <h3>Event Created</h3>
              <p>50 events planned this month.</p>
              <button>View Details</button>
            </div>
            <div class="card">
              <i class="fas fa-ticket-alt"></i>
              <h3>Tickets Sold</h3>
              <p>Over 5000 tickets sold.</p>
              <button>View Analytics</button>
            </div>
            <div class="card">
              <i class="fas fa-user-friends"></i>
              <h3>Attendees</h3>
              <p>Join Over 100,000 attendees.</p>
              <button>View Attendees</button>
            </div>
            <div class="card">
              <i class="fas fa-hand-holding-usd"></i>
              <h3>Revenue Generated</h3>
              <p>LKR 150 000 in revenue.</p>
              <button>View Financials</button>
            </div>
          </div>
          <section class="main-course">
            <h1>Event Performance</h1>
            <div class="course-box">
              <ul>
                <li class="active">Ongoing</li>
                <li>Upcoming</li>
                <li>Completed</li>
                <li>Cancelled</li>
              </ul>
              <div class="course">
                <div class="box">
                  <h3>Music Concert</h3>
                  <p>80% of tickets sold</p>
                  <button>View Progress</button>
                  <i class="fas fa-music"></i>
                </div>
                <div class="box">
                  <h3>Tech Conference</h3>
                  <p>65% of tickets sold</p>
                  <button>View Progress</button>
                  <i class="fas fa-laptop"></i>
                </div>
                <div class="box">
                  <h3>Food Festival</h3>
                  <p>50% of tickets sold</p>
                  <button>View Progress</button>
                  <i class="fas fa-utensils"></i>
                </div>
              </div>
            </div>
          </section>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Analytics
