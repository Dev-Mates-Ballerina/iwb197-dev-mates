import React from 'react'
import '../../css/Help.css';
import charity from '../../images/charity.jpg';
import jane from '../../images/jane.jpg';
import marlen from '../../images/marlen.jpg';
import ourstory from '../../images/ourstory.jpg';
import partyy from '../../images/partyy.jpg';
import wedding from '../../images/wedding.jpg';
import wendy from '../../images/wendy.jpg';
import Navbar from '../../components/Navbar'

function Help() {
  return (
    <div>
      <Navbar/>
      <div className='main-content'>
        <div class="about-container">
            <div class="about">
                <h1>About Us</h1>
                <p>PlanItNow is your all-in-one event planning app, designed to simplify and streamline the process of organizing unforgettable events. Whether you're planning a birthday party, corporate meeting, wedding, or community gathering, our app offers the tools you need to stay organized and stress-free.</p>
                <div class="images">
                    <div class="imgO">
                        <img src ={wedding}></img>
                        <h5>Weddings</h5>
                    </div>
                    <div class="imgO">
                        <img src={charity}></img>
                        <h5>Charity events</h5>
                    </div>
                    <div class="imgO">
                        <img src={partyy}></img>
                        <h5>Parties</h5>
                    </div>
                </div>
                <div class="mision">
                    <h3>Our Mision</h3>
                    <p>At PlanItNow, our mission is to empower individuals and businesses by providing an easy-to-use platform that helps them plan, organize, and manage events efficiently. We believe in turning ideas into reality by offering features that simplify everything from venue booking to guest management.</p>
                </div>
                <div class="offer">
                    <h4>What we offer?</h4>
                    <p>PlanItNow allows you to create detailed event plans, set dates, and send automatic reminders to your guests.</p>
                    <p>Stay on top of every task, with an intuitive checklist system that helps you track progress and assign responsibilities.</p>
                    <p>Connect with vendors, compare services, and manage bookings directly from the app.</p>
                    <p>Charity Projects</p>
                </div>
                <div class="storyH">
                    <h2>Our Story</h2>
                </div>
                <div class="story">
                    <div class="storyImg">
                        <img src={ourstory}></img>
                    </div>
                    <div class="storyP">
                        <p>Founded in 2024, PlanItNow was created out of a passion for seamless event planning. We noticed how challenging and time-consuming it can be to keep all aspects of an event organized, and we set out to create a tool that would make it easier. Our team of dedicated developers and event experts came together to create a platform designed to take the hassle out of event management.</p>
                    </div>
                </div>
                <div class="teamH">
                    <h2>Our Team</h2>
                    <p>We're a diverse group of developers, designers, and event planners who are dedicated to bringing innovation to the event planning space. Our team is committed to constantly improving the app and ensuring that it meets the needs of event planners, big or small.</p>
                </div>
                <div class="team">
                    <div class="teamM">
                        <img src={marlen}></img>
                        <h3>Marlen Anthony</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div class="teamM">
                        <img src={wendy}></img>
                        <h3>Wendy Wei</h3>
                        <p>Director</p>
                    </div>
                    <div class="teamM">
                        <img src={jane}></img>
                        <h3>Jane Doe</h3>
                        <p>Product Manager</p>
                    </div>
                </div>
                <div class="aboutF">
                    <h4>Get Started with PlanItNow Today!</h4>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Help
