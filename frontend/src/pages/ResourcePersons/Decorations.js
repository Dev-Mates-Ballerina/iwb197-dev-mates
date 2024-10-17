import React from 'react'
import Navbar from '../../components/Navbar'
import '../../css/Decorations.css'
import { Link } from'react-router-dom'
import deco1 from '../../images/deco1.jpg';
import deco2 from '../../images/deco2.jpg';
import deco3 from '../../images/deco3.jpg';
import deco4 from '../../images/deco4.jpg';
import deco5 from '../../images/deco5.jpg';
import deco6 from '../../images/deco6.jpg';
import dollar from '../../images/dollar.png'

function Decorations() {
  return (
    <div>
      <Navbar/>
      <div class="main-content">
        <div class="decorations-main-content">
          <div class="sidebar1">
            <ol class="steps">
              <li class="step"><Link to='/newEvent'>1</Link></li>
              <li class="step"><Link to='/newEvent/Category'>2</Link></li>
              <li class="step current"><Link to='/newEvent/ResourcePerson'>3</Link></li>
              <li class="step"><Link to='/newEvent/Charity'>4</Link></li>
              <li class="step"><Link to='/newEvent/Budget'>5</Link></li>
            </ol>
          </div>
          <div class="decoration-content">
            <div className="decoration-budget-header">
                <h2>Step 3</h2>
                <div className="decoration-budget">
                  <img src={dollar} alt="" width='50px'/>
                  <h3>LKR 50 000</h3>
                </div>
            </div>
            <p class="decoration-descriptionP1">Select the Decorations Category you want</p>
            <p className='decoration-descriptionP2'>Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. <br></br>Please choose from the options so we can help you plan your events.</p>
            <div class="decorationCategory">
              <div class="decoration">
                <h4 class="decoration-descriptionH4">Select the Decoration team you want</h4>
                <div class="decorationTeams">
                  <div class="decoration1">
                    <div>
                      <img src={deco1} />
                    </div>
                    <div class="decorationText">
                      <p1>Elite Event Creators</p1>
                      <p>+94 71 111 1111</p>
                      <p>info@elitecreators.com</p>
                      <p>LKR 162,500</p>
                    </div>
                    <button class="decoration-choose">Choose</button>
                  </div>
                  <div class="decoration2">
                    <div>
                      <img src={deco2} />
                    </div>
                    <div class="decorationText">
                      <p1>Sparkle Celebrations</p1>
                      <p>+94 71 111 1111</p>
                      <p>contact@sparkle.com</p>
                      <p>LKR 146,250</p>
                    </div> 
                    <button class="decoration-choose">Choose</button>
                  </div>
                  <div class="decoration3">
                    <div>
                      <img src={deco3} />
                    </div>
                    <div class="decorationText">
                      <p1>Dream Day Planners</p1>
                      <p>+94 71 111 1111</p>
                      <p>hello@dreamday.com</p>
                      <p>LKR 195,000</p>
                    </div> 
                    <button class="decoration-choose">Choose</button> 
                  </div>
                </div>
                <div class="decorationTeams1">
                  <div class="decoration4">
                    <div>
                      <img src={deco4} />
                    </div>
                    <div class="decorationText">
                      <p1>Glamour Event Solutions</p1>
                      <p>+94 71 111 1111</p>
                      <p>support@glamourevents.com</p>
                      <p>LKR 178,750</p>
                    </div>
                    <button class="decoration-choose">Choose</button>
                  </div>
                  <div class="decoration5">
                    <div>
                      <img src={deco5} />
                    </div>
                    <div class="decorationText">
                      <p1>Festive Moments Co.</p1>
                      <p>+94 71 111 1111</p>
                      <p>inquiries@festive.com</p>
                      <p>LKR 130,000</p>
                    </div>  
                    <button class="decoration-choose">Choose</button>
                  </div>
                  <div class="decoration6">
                    <div>
                      <img src={deco6} />
                    </div>
                    <div class="decorationText">
                      <p1>Perfect Planner</p1>
                      <p>+94 71 111 1111</p>
                      <p>info@perfectlyplanner.com</p>
                      <p>LKR 211,250</p>
                    </div>  
                    <button class="decoration-choose">Choose</button>
                  </div>
                </div>
              </div>  
            </div>
              <button class="decoration-back-button">Back</button>
              <button class="decoration-save-button">Save</button>
          </div>
          </div>
          </div>
        </div>
  )
}

export default Decorations
