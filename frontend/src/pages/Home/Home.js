import React from 'react'
import Navbar from '../../components/Navbar'
import '../../css/Home.css'
import Party from '../../images/party.jpg';
import Wedding from '../../images/weddingphoto.jpg';
import Charity from '../../images/charityphoto.jpg';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="main-content">
         <div className='home-main'>     
            <div className="header1">
                <section class="hero">
                    <div class="container">
                    <div class="hero-text">
                        <h2>Plan Your Perfect Event</h2>
                        <p>From weddings to corporate events, we make your special occasion unforgettable.</p>
                        <div className="btn">
                            <a href="//" class="btn-primary">Get Started</a>
                            <Link to="/serviceProviderDashboard" class="btn-primary1">Be a Service Provider</Link>
                        </div>
                    </div>
                    </div>
                </section>

                <section class="services">
                    <div class="container">
                    <div class="service-cards">
                        <div class="card">
                        <img src={Wedding} alt="Wedding Planning"/>
                        <h3>Wedding Planning</h3>
                        <p>We help you create your dream wedding with attention to every detail.</p>
                        </div>
                        <div class="card">
                        <img src={Charity} alt="Corporate Events"/>
                        <h3>Corporate Events</h3>
                        <p>Professional event planning for meetings, conferences, and more.</p>
                        </div>
                        <div class="card">
                        <img src={Party} alt="Parties"/>
                        <h3>Private Parties</h3>
                        <p>From birthdays to anniversaries, we make every celebration special.</p>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
            

            <div className="recent">
                <h3>Recent Events</h3>
                <div class="event-table">
                    <table>
                        <tr>
                            <th>Event ID</th>
                            <th>Name</th>
                            <th>Budget</th>
                            <th>Date</th>
                            <th>Location</th>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Hackathon</td>
                            <td>LKR 5 000</td>
                            <td>2024-10-25</td>
                            <td>Colombo</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Tech Conference</td>
                            <td>LKR 8 000</td>
                            <td>2024-11-15</td>
                            <td>Kurunegala</td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Startup Expo</td>
                            <td>LKR 3 000</td>
                            <td>2024-12-05</td>
                            <td>Kandy</td>
                        </tr>
                    </table>

                </div>
        
            </div>
            <div class="screen">
                <div class="screen-body">
                    <div class="screen-body-item left">
                    <div class="app-title">
                        <span>CONTACT</span>
                        <span>US</span>
                    </div>
                    <div class="app-contact">CONTACT INFO : +94 71 131 1891</div>
                    </div>
                    <div class="screen-body-item">
                    <div class="app-form">
                        <div class="app-form-group">
                        <input class="app-form-control" placeholder="NAME" />
                        </div>
                        <div class="app-form-group">
                        <input class="app-form-control" placeholder="EMAIL"/>
                        </div>
                        <div class="app-form-group">
                        <input class="app-form-control" placeholder="CONTACT NO" />
                        </div>
                        <div class="app-form-group message">
                        <input class="app-form-control" placeholder="MESSAGE" />
                        </div>
                        <div class="app-form-group buttons">
                        <button class="app-form-button">CANCEL</button>
                        <button class="app-form-button">SEND</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>

    <Footer/>

</div>
);
};


export default Home
