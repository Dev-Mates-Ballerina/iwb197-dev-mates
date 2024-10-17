import React from 'react'
import logo from '../images/logo.png';
import '../css/SPNavbar.css';
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
            
            <li><Link to="/serviceProviderDashboard">
            <i class="fas fa-home"></i>
            <span class="nav-item">Dashboard</span>
            </Link></li>

            <li><Link to='/bookings'>
                <i class="fas fa-tasks"></i>
                <span class="nav-item">Bookings</span>
                </Link>
            </li>
            
            <li><Link to='/serviceProvider'>
            <i class="fas fa-user"></i>
            <span class="nav-item">Accounts</span>
            </Link></li>

            <li><a href="" class="logout">
            <i class="fas fa-sign-out-alt"></i>
            <span class="nav-item">Log out</span>
            </a></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
