import React from 'react'
import '../css/Footer.css';

function Footer() {
  return (
    <div>
        <footer class="footer">
        <div class="footer-container">


            <div class="footer-section menu-links">
            <h4>Quick Links</h4>
            <ul class="menu">
                <li class="menu__item"><a class="menu__link" href="/">Home</a></li>
                <li class="menu__item"><a class="menu__link" href="//">New Event</a></li>
                <li class="menu__item"><a class="menu__link" href="//">Analytics</a></li>
                <li class="menu__item"><a class="menu__link" href="//">Help</a></li>
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
            <p>Email: support@PlanItNow.com</p>
            <p>Phone: +94 76 23 75 897</p>
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
