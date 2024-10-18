import React from 'react'
import Navbar from '../../components/Navbar'
import '../../css/CreateEvent.css'
import { Link } from'react-router-dom';


function CreateEvent() {
  return (
    <div>
      <Navbar/>
        <div className='main-content'>
            <div className='create-event-H'>
              <h1 className='create-eventH1'>Create event</h1>
            </div>
            <div className='create-event-sidebar-and-form'>
              <div className='create-event-sidebar-div'>
                <div class="sidebar1">
                  <ol class="steps">
                      <li class="step current"><Link to='/newEvent'>1</Link></li>
                      <li class="step"><Link to='/newEvent/Category'>2</Link></li>
                      <li class="step"><Link to='/newEvent/ResourcePerson'>3</Link></li>
                      <li class="step"><Link to='/newEvent/Charity'>4</Link></li>
                      <li class="step"><Link to='/newEvent/Budget'>5</Link></li>
                  </ol>
                </div>
              </div>
              <div className='create-event-form-div'>
                <h2 className='step1H2'>Step 1</h2>
                <p className='create-new-eventP'>Create a new event</p>
                  <div className='create-event-form-input'>
                    <input className='create-event-name-input' type='text' id='event-name' name='event-name' required placeholder='Event name' />
                  </div>
                  <div className='create-event-form-input'>
                    <input className='create-event-date-input' type='date' id='date' name='date' required placeholder='Event date'/>
                  </div>
                  <div className='create-event-form-input'>
                    <input className='create-event-budget-input' type='text' id='budget' name='budget' required placeholder='Estimated budget'/>
                  </div>
                  <div className='create-event-form-input'>
                    <input className='create-event-budget-input' type='text' id='location' name='location' required placeholder='Location'/>
                  </div>
                  <div className='create-event-form-buttonDiv'>
                    <button className='create-event-button'>Create</button>
                  </div>
                  <div className='create-event-form-buttonDiv'>
                    <button className='create-event-back-button'>Back</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CreateEvent
