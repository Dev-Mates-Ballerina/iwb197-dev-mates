import React from 'react'
import '../css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <footer class="footer">
        <div class="footer-container">


            <div class="footer-section menu-links">
            <h4>Quick Links</h4>
            <ul class="menu">
                <li class="menu__item"><a class="menu__link" href="/">Home</a></li>
                <li class="menu__item"><Link to='/newEvent'><a class="menu__link">New Event</a></Link></li>
                <li class="menu__item"><a class="menu__link" href="/analytics">Analytics</a></li>
                <li class="menu__item"><a class="menu__link" href="/help">Help</a></li>
            </ul>
            </div>

            <div class="footer-section newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <p>Get the latest updates and offers.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Your Email Address" class="newsletter-input" />
                <button type="submit" class="newsletter-btn">Subscribe</button>
            </form>
            </div>

            <div class="footer-section contact-info">
            <h4>Contact Us</h4>
            <p>Email: support@eventplanner.com</p>
            <p>Phone: +1 (234) 567-8901</p>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy;2024 PlanItNow | All Rights Reserved</p>
        </div>
        </footer>
    </div>
  )
}

export default Footer
