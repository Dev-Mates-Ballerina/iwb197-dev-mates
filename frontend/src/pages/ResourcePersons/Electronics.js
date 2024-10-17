import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from'react-router-dom';
import '../../css/Electronics.css';
import elec1 from '../../images/elec1.jpeg';
import elec2 from '../../images/elec2.jpeg';
import elec3 from '../../images/elec3.jpeg';
import elec4 from '../../images/elec4.jpeg';
import elec5 from '../../images/elec5.jpeg';
import elec6 from '../../images/elec6.jpeg';
import dollar from '../../images/dollar.png'

function Electronics() {
  return (
    <div>
      <Navbar/>
      <div class="main-content">
        <div className='electronics-main-content'>
          <div class="sidebar1">
            <ol class="steps">
              <li class="step"><Link to='/newEvent'>1</Link></li>
              <li class="step"><Link to='/newEvent/Category'>2</Link></li>
              <li class="step current"><Link to='/newEvent/ResourcePerson'>3</Link></li>
              <li class="step"><Link to='/newEvent/Charity'>4</Link></li>
              <li class="step"><Link to='/newEvent/Budget'>5</Link></li>
            </ol>
          </div>
          <div class="electronics-content">
            <div className="electronics-budget-header">
              <h2>Step 3</h2>
              <div className="electronics-budget">
                <img src={dollar} alt="" width='50px'/>
                <h3>LKR 50 000</h3>
              </div>
            </div>
              <p class="electronics-descriptionP1">Select the Electronics Category you want</p>
              <p class="electronics-descriptionP2" >Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. Please choose from the options so we can help you plan your events.</p>
            <div class="electronicCategory">
              <div class="electronic">
                <h4 className='electronicH4'>Select the Electronics team you want</h4>
                <div class="electronicTeams">
                  <div class="electronic1">
                    <div>
                      <img src={elec1} />
                    </div>
                    <div class="electronicText">
                      <p1>EventTech Solutions</p1>
                      <p>(011) 223-5678</p>
                      <p>sales@eventtechsl.com</p>
                      <p>LKR 25,000</p>
                    </div>
                    <button class="electronics-choose">Choose</button>
                  </div>
                  <div class="electronic2">
                    <div>
                      <img src={elec2} />
                    </div>
                    <div class="electronicText">
                      <p1>TechZone Rentals</p1>
                      <p>(011) 334-6789</p>
                      <p>info@techzonerentals.com</p>
                      <p>LKR 15,000</p>
                    </div>
                    <button class="electronics-choose">Choose</button>  
                  </div>
                  <div class="electronic3">
                    <div>
                      <img src={elec3} />
                    </div>
                    <div class="electronicText">
                      <p1>AudioVisual Masters</p1>
                      <p>(011) 445-7890</p>
                      <p>contact@avmasters.lk</p>
                      <p>LKR 30,000</p>
                    </div> 
                    <button class="electronics-choose">Choose</button> 
                  </div>
                </div>
                <div class="electronicTeams1">
                  <div class="electronic4">
                    <div>
                      <img src={elec4} />
                    </div>
                    <div class="electronicText">
                      <p1>ProEvents Electronics</p1>
                      <p>(011) 556-8901</p>
                      <p>service@proeventselectronics.com</p>
                      <p>LKR 40,000</p>
                    </div>
                    <button class="electronics-choose">Choose</button>
                  </div>
                  <div class="electronic5">
                    <div>
                      <img src={elec5} />
                    </div>
                    <div class="electronicText">
                      <p1>LiveTech Supplies</p1>
                      <p>(011) 667-9012</p>
                      <p>support@livetechsupplies.lk</p>
                      <p>LKR 20,000</p>
                    </div>  
                    <button class="electronics-choose">Choose</button>
                  </div>
                  <div class="electronic6">
                    <div>
                      <img src={elec6} />
                    </div>
                    <div class="electronicText">
                      <p1>Event Gear Hub</p1>
                      <p>(011) 778-0123</p>
                      <p>inquiries@eventgearhub.com</p>
                      <p>LKR 18,000</p>
                    </div>  
                    <button class="electronics-choose">Choose</button>
                  </div>
                </div>
              </div>  
            </div>
              <button class="electronics-back-button">Back</button>
              <button class="electronics-save-button">Save</button>
          </div>
          </div>
          </div>
        </div>
  )
}

export default Electronics
