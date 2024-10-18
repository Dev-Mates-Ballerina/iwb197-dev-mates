import React from 'react'
import logo from '../images/logo.png';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <Link to="/">
                <li className='logo'>
                    <img src={logo} alt="" />
                </li>
            </Link>
            
            <li><Link to="/">
            <i class="fas fa-home"></i>
            <span class="nav-item">Home</span>
            </Link></li>

            <li><Link to='/newEvent'>
                <i class="fas fa-tasks"></i>
                <span class="nav-item">New Event</span>
                </Link>
            </li>
            
            <li><Link to='/analytics'>
            <i class="fas fa-chart-bar"></i>
            <span class="nav-item">Analytics</span>
            </Link></li>

            <li><Link to='/help'>
            <i class="fas fa-question-circle"></i>
            <span class="nav-item">Help</span>
            </Link></li>

            <li><Link to='/account'>
            <i class="fas fa-user"></i>
            <span class="nav-item">Account</span>
            </Link></li>

            <li><Link to="/login" class="logout">
            <i class="fas fa-sign-out-alt"></i>
            <span class="nav-item">Log out</span>
            </Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
