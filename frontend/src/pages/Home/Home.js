import React from 'react'
import Navbar from '../../components/Navbar'
import '../../css/Home.css'
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="main-content">
                
        <div className="header1">
            <section class="hero">
                <div class="container">
                <div class="hero-text">
                    <h2>Plan Your Perfect Event</h2>
                    <p>From weddings to corporate events, we make your special occasion unforgettable.</p>
                    <div className="btn">
                        <a href="//" class="btn-primary">Get Started</a>
                    </div>
                </div>
                </div>
            </section>

            <section class="services">
                <div class="container">
                <div class="service-cards">
                    <div class="card">
                    <img src={''} alt="Wedding Planning"/>
                    <h3>Wedding Planning</h3>
                    <p>We help you create your dream wedding with attention to every detail.</p>
                    </div>
                    <div class="card">
                    <img src={''} alt="Corporate Events"/>
                    <h3>Corporate Events</h3>
                    <p>Professional event planning for meetings, conferences, and more.</p>
                    </div>
                    <div class="card">
                    <img src={''} alt="Parties"/>
                    <h3>Private Parties</h3>
                    <p>From birthdays to anniversaries, we make every celebration special.</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
        

        <div className="recent">
            <h3>Recent Events</h3>
     
        </div>
        <div class="screen">
            <div class="screen-body">
                <div class="screen-body-item left">
                <div class="app-title">
                    <span>CONTACT</span>
                    <span>US</span>
                </div>
                <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                </div>
                <div class="screen-body-item">
                <div class="app-form">
                    <div class="app-form-group">
                    <input class="app-form-control" placeholder="NAME" value="Krisantus Wanandi" />
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

    <Footer/>

</div>
);
};


export default Home
