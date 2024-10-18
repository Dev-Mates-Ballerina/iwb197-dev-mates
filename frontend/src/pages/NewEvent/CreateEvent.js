import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../css/CreateEvent.css';
import { Link, useNavigate } from 'react-router-dom';

function CreateEvent() {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    budget: "",
    location: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation after submission

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  // Submit the new event to the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEvent = {
        ...event,
        budget: parseInt(event.budget, 10), // Convert budget to an integer
      };
      
      const response = await fetch('http://localhost:8085/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent), // Send the new event object
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Event created with ID:", result.id);
        alert('Event created successfully!');
        navigate('/newEvent/Category'); // Navigate to the next step or desired route
      } else {
        throw new Error('Failed to create event');
      }
    } catch (error) {
      setError(error);
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='main-content'>
      <div className='create-event-main'>
        <div className='create-event-sidebar-and-form'>
          <div className='create-event-sidebar-div'>
            <div className="sidebar1">
              <ol className="steps">
                <li className="step current"><Link to='/newEvent'>1</Link></li>
                <li className="step"><Link to='/newEvent/Category'>2</Link></li>
                <li className="step"><Link to='/newEvent/ResourcePerson'>3</Link></li>
                <li className="step"><Link to='/newEvent/Charity'>4</Link></li>
                <li className="step"><Link to='/newEvent/Budget'>5</Link></li>
              </ol>
            </div>
          </div>
          <div className='create-event-form-div'>
            <h2 className='step1H2'>Step 1</h2>
            <p className='create-new-eventP'>Create a new event</p>
            <form onSubmit={handleSubmit}>
              <div className='create-event-form-input'>
                <input 
                  className='create-event-name-input' 
                  type='text' 
                  id='event-name' 
                  name='name' 
                  required 
                  placeholder='Event name' 
                  value={event.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className='create-event-form-input'>
                <input 
                  className='create-event-date-input' 
                  type='text' 
                  id='date' 
                  name='date' 
                  required 
                  placeholder='Event date'
                  value={event.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className='create-event-form-input'>
                <input 
                  className='create-event-budget-input' 
                  type='number' 
                  id='budget' 
                  name='budget' 
                  required 
                  placeholder='Estimated budget'
                  value={event.budget}
                  onChange={handleInputChange}
                />
              </div>
              <div className='create-event-form-input'>
                <input 
                  className='create-event-budget-input' 
                  type='text' 
                  id='location' 
                  name='location' 
                  required 
                  placeholder='Location'
                  value={event.location}
                  onChange={handleInputChange}
                />
              </div>
              <div className='create-event-form-buttonDiv'>
              
                <button className='create-event-button' type='submit'>Create</button>
              
              </div>
              {error && <p className="error-message">{error.message}</p>} {/* Display error message */}
            </form>
            {/* <div className='create-event-form-buttonDiv'>
              <Link to='/newEvent' className='create-event-back-button'>Back</Link>
            </div> */}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
