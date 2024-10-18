import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../css/Home.css';
import Party from '../../images/party.jpg';
import Wedding from '../../images/weddingphoto.jpg';
import Charity from '../../images/charityphoto.jpg';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  const [events, setEvents] = useState([]); // State to hold events data
  const [charityEvents, setCharityEvents] = useState([]); // State to hold charity events data

  // Fetch events data from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8085/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data); // Set fetched events to state
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents(); // Call the fetch function
  }, []); // Empty dependency array to run only once on mount

  // Fetch charity events data from backend
  useEffect(() => {
    const fetchCharityEvents = async () => {
      try {
        const response = await fetch('http://localhost:8086/charities'); // Replace with your charity events endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch charity events');
        }
        const data = await response.json();
        setCharityEvents(data); // Set fetched charity events to state
      } catch (error) {
        console.error('Error fetching charity events:', error);
      }
    };

    fetchCharityEvents(); // Call the fetch function
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <div className='home-main'>
          <div className="header1">
            <section className="hero">
              <div className="container">
                <div className="hero-text">
                  <h2>Plan Your Perfect Event</h2>
                  <p>From weddings to corporate events, we make your special occasion unforgettable.</p>
                  <div className="btn">
                    <Link to="/register" className="btn-primary1">Be a Organizer</Link>
                    <Link to="/serviceProvider/register" className="btn-primary1">Be a Service Provider</Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="services12">
              <div className="container">
                <div className="service-cards1">
                  <div className="card1">
                    <img src={Wedding} alt="Wedding Planning" />
                    <h3>Wedding Planning</h3>
                    <p>We help you create your dream wedding with attention to every detail.</p>
                  </div>
                  <div className="card1">
                    <img src={Charity} alt="Corporate Events" />
                    <h3>Corporate Events</h3>
                    <p>Professional event planning for meetings, conferences, and more.</p>
                  </div>
                  <div className="card1">
                    <img src={Party} alt="Parties" />
                    <h3>Private Parties</h3>
                    <p>From birthdays to anniversaries, we make every celebration special.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="recent">
            <h3>Recent Events</h3>
            <div className="event-table">
              <table>
                <thead>
                  <tr>
                    <th>Event ID</th>
                    <th>Name</th>
                    <th>Budget</th>
                    <th>Date</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map(event => (
                    <tr key={event.id}>
                      <td>{event.id}</td>
                      <td>{event.name}</td>
                      <td>LKR {event.budget}</td>
                      <td>{event.date}</td>
                      <td>{event.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="charity-events">
            <h3>Charity Events</h3>
            <div className="charity-table">
              <table>
                <thead>
                  <tr>
                    <th>Event ID</th>
                    <th>Charity Name</th>
                    <th>Charity Budget</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {charityEvents.map(charity => (
                    <tr key={charity.id}>
                      <td>{charity.id}</td>
                      <td>{charity.name}</td>
                      <td>LKR {charity.amount}</td> {/* Use amount for charity budget */}
                      <td>{charity.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="screen">
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact">CONTACT INFO : +94 71 131 1891</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="CONTACT NO" />
                  </div>
                  <div className="app-form-group message">
                    <input className="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">CANCEL</button>
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
