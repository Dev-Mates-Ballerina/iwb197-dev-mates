import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from'react-router-dom'
import '../../css/Charity.css'
import dollar from '../../images/dollar.png'

function Charity() {
  return (
    <div>
      <Navbar/>
      <div className='main-content'>
        <div className='charity-main-content'>
          <div className='charity-sidebar'>
            <div class="sidebar1">
              <ol class="steps">
                  <li class="step"><Link to='/newEvent'>1</Link></li>
                  <li class="step"><Link to='/newEvent/Category'>2</Link></li>
                  <li class="step"><Link to='/newEvent/ResourcePerson'>3</Link></li>
                  <li class="step current"><Link to='/newEvent/Charity'>4</Link></li>
                  <li class="step"><Link to='/newEvent/Budget'>5</Link></li>
              </ol>
            </div>
          </div>
          <div className='charity-selection-rightside'>
            <div className='charity-selection-rightside-header'>
              <div className='charity-selection-rightsideH'>
                <h2 className='charity-selection-rightsideH2'>Step 4</h2>
              </div>
             
            </div>
            <div className='charity-selection-rightsideP'>
              <p className='charity-selection-rightsideP1'>Are you interested in charity?</p>
              <p className='charity-selection-rightsideP2'>Are you passionate about giving back? Join us as a contributor to ongoing charity events or take the lead by organizing your own. Together, we can make a meaningful impact in the lives of those in need.</p>
            </div>
            <div className='charity-selection-rightside-body'>
              <div className='charity-selection-rightside-bodyP1-div'>
                <p className='charity-selection-rightside-bodyP1'>Event Type</p>
              </div>
              <div className='charity-selection-rightside-body-radioB-div'>
                <input className="charity-contributor-input" type='radio' id="contributorI" name='charityOption' value="asAcontributor"/>
                <label className="contributor-label" for='contributorI'>As a contributor</label>
                <input className="charity-event-input" id='eventI' type='radio' name='charityOption' value="newEventC"/>
                <label className="event-label" for='eventI'>New event</label>
              </div>
              <div className='charity-selection-rightside-body-form-div'>
                <input className="charity-selection-eventName" type='text' placeholder='Event name'/>
                <input className="charity-selection-eventDate" type='date' placeholder='Event Date'/><br/>
                <input className="charity-selection-cause" type='text' placeholder='Cause'/>
                <input className="charity-selection-totalAmount"type='text' placeholder='Total Amount Raised So far'/><br/>
                <p className='charity-selection-more'>For more details....</p>
                <button className='charity-selection-rightside-body-saveB'>Save</button><br/>
                <Link to='/newEvent/Budget'><button className='charity-selection-rightside-body-skipB'>Skip</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charity
