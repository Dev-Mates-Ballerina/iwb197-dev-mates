import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/Charity.css';
import dollar from '../../images/dollar.png';

function Charity() {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [cause, setCause] = useState('');
  const [amount, setAmount] = useState('');
  const [isContributor, setIsContributor] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const charityData = {
      name: eventName,
      date: eventDate, // Convert to timestamp if needed
      cause: cause,
      amount: parseInt(amount, 10), // Ensure amount is an integer
    };

    try {
      const response = await fetch('http://localhost:8086/charities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(charityData),
      });

      if (!response.ok) {
        throw new Error('Failed to save charity data');
      }

      const result = await response.json();
      alert('Charity data saved successfully!', result);
      navigate('/newEvent/Budget');
      // You might want to clear the form or show a success message here
    } catch (error) {
      console.error('Error saving charity data:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='main-content'>
        <div className='charity-main-content'>
          <div className='charity-sidebar'>
            <div className="sidebar1">
              <ol className="steps">
                <li className="step"><Link to='/newEvent'>1</Link></li>
                <li className="step"><Link to='/newEvent/Category'>2</Link></li>
                <li className="step"><Link to='/newEvent/ResourcePerson'>3</Link></li>
                <li className="step current"><Link to='/newEvent/Charity'>4</Link></li>
                <li className="step"><Link to='/newEvent/Budget'>5</Link></li>
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
                <input
                  className="charity-contributor-input"
                  type='radio'
                  id="contributorI"
                  name='charityOption'
                  value="asAcontributor"
                  onChange={() => setIsContributor(true)}
                />
                <label className="contributor-label" htmlFor='contributorI'>As a contributor</label>
                <input
                  className="charity-event-input"
                  id='eventI'
                  type='radio'
                  name='charityOption'
                  value="newEventC"
                  onChange={() => setIsContributor(false)}
                />
                <label className="event-label" htmlFor='eventI'>New event</label>
              </div>
              <form className='charity-selection-rightside-body-form-div' onSubmit={handleSubmit}>
                <input
                  className="charity-selection-eventName"
                  type='text'
                  placeholder='Event name'
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
                <input
                  className="charity-selection-eventDate"
                  type='text'
                  placeholder='Event Date'
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                /><br />
                <input
                  className="charity-selection-cause"
                  type='text'
                  placeholder='Cause'
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  required
                />
                <input
                  className="charity-selection-totalAmount"
                  type='number'
                  placeholder='Amount to be raised by this..'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                /><br />
                <p className='charity-selection-more'>For more details....</p>
                <button className='charity-selection-rightside-body-saveB' type='submit'>Save</button><br />
                <Link to='/newEvent/Budget'>
                  <button className='charity-selection-rightside-body-skipB' type='button'>Skip</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charity;
