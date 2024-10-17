import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from'react-router-dom'
import '../../css/Entertainment.css'
import dan1 from '../../images/dan1.jpeg';
import dan2 from '../../images/dan2.jpeg';
import dan3 from '../../images/dan3.jpeg';
import dj1 from '../../images/dj1.jpeg';
import dj2 from '../../images/dj2.jpeg';
import dj3 from '../../images/dj3.jpeg';
import dollar from '../../images/dollar.png';

function Entertainment() {
  return (
    <div>
      <Navbar/>
      <div class="main-content">
        <div className='main-content-entertainment'>
          <div className='main-content-entertainment-sidebar'>
            <div class="sidebar1">
                <ol class="steps">
                  <li class="step"><Link to='/newEvent'>1</Link></li>
                  <li class="step"><Link to='/newEvent/Category'>2</Link></li>
                  <li class="step current"><Link to='/newEvent/ResourcePerson'>3</Link></li>
                  <li class="step"><Link to='/newEvent/Charity'>4</Link></li>
                  <li class="step"><Link to='/newEvent/Budget'>5</Link></li>
                </ol>
            </div>
          </div>
          <div class="entertainment-page-rightSide">
              <div className='entertainment-page-rightSide-header'>
                <h2 className='entertainment-page-rightSideH2'>Step 3</h2>
                <div className="entertainment-budget">
                  <img src={dollar} alt="" width='50px'/>
                  <h3>LKR 50 000</h3>
                </div>
              </div>
              <p class="entertainment-page-rightSideP1">Select the Entertainment Category you want</p>
              <p class="entertainment-page-rightSideP2">Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. Please choose from the options so we can help you plan your events.</p>
              <div class="entertainmentCategory">
          <div class="dance">
            <h4 className='danceH4'>Select the Dancing team you want</h4>
            <div class="dancingTeams">
              <div class="dance1">
                <div>
                  <img src={dan1} />
                </div>
                <div className='dance1-para'>
                  <p1>CV Crew</p1>
                  <p>cvcrew@gmail.com</p>
                  <p>0711234567</p>
                  <p>LKR 10 000</p>
                </div>
                <button class="dancingTeams-choose">Choose</button>
              </div>
              <div class="dance2">
                <div>
                  <img src={dan2} />
                </div>
                <div className='dance2-para'>
                  <p1>BMK Dancers</p1>
                  <p>bmkdancers@gmail.com</p>
                  <p>0711234567</p>
                  <p>LKR 15 000</p>
                </div> 
                <button class="dancingTeams-choose">Choose</button> 
              </div>
              <div class="dance3">
                <div>
                  <img src={dan3} />
                </div>
                <div className='dance3-para'>
                  <p1>Shadow Girls</p1>
                  <p>shadow@gmail.com</p>
                  <p>0711234567</p>
                  <p>LKR 20 000</p>
                </div>  
                <button class="dancingTeams-choose">Choose</button>
              </div>
            </div>
          </div> 
          <div class="DJ">
            <h4 class="djTeamsBH4">Select the DJ team you want</h4>
            <div class="DJteams">
              <div class="DJ1">
                <div>
                  <img src={dj1} />
                </div>
                <div>
                  <p1>DJ M</p1>
                  <p>djm@gmail.com</p>
                  <p>0711234567</p>
                  <p>LKR 15 000</p>
                </div>
                <button class="djTeams-choose">Choose</button>
              </div>
              <div class="DJ2">
                <div>
                  <img src={dj2} />
                </div>
                <div>
                  <p1>DJ Song</p1>
                  <p>djsong@gmail.com</p>
                  <p>0711234567</p>
                  <p>LKR 20 000</p>
                </div> 
                <button class="djTeams-choose">Choose</button> 
              </div>
              <div class="DJ2">
                <div>
                  <img src={dj3} />
                </div>
                <div>
                  <p1>DJ Mix</p1>
                  <p>djmix@gmail.com</p>
                  <p>0711234567</p>
                  <p>LKR 30 000</p>
                </div>  
                <button class="djTeams-choose">Choose</button>
              </div>
            </div>
          </div> 
        </div>
          <button class="entertainment-back-button">Back</button>
          <button class="entertainment-save-button">Save</button>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Entertainment
