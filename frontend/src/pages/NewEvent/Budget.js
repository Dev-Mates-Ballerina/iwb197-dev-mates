import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/DataProvider';
import Navbar from '../../components/Navbar';
import '../../css/Budget.css';
import { Link } from 'react-router-dom';
import dollar from '../../images/dollar.png';

function Budget() {
  const { selectedCards, setSelectedCards } = useContext(DataContext);
  const [name, setName] = useState(''); // Add state for name
  const [phone, setPhone] = useState(''); // Add state for phone
  const [date, setDate] = useState(''); // Add state for date
  const [location, setLocation] = useState(''); // Add state for location
  const [email, setEmail] = useState(''); // Add state for email

  // Function to delete a specific card
  const handleDelete = (indexToDelete) => {
    const updatedCards = selectedCards.filter((_, index) => index !== indexToDelete);
    setSelectedCards(updatedCards);
    localStorage.setItem('selectedCards', JSON.stringify(updatedCards));
  };

  const handleSubmit = async () => {
    try {
      const budgetData = {
        name: name || selectedCards[0]?.name || 'Default Event Name', // Send as 'uname' for backend
        email: email || 'default@example.com', // Ensure you include email
        phone: phone || '0000000000', // Optional
        price: totalPrice.toString(), // Required field
        // Remove the following extra fields:
        // date: date || 'Not provided',
        // location: location || selectedCards[0]?.location || 'Unknown', 
        // uname: name || 'Default Event Name',
        // update: email || 'default@example.com',
        // uphone: phone || '0000000000',
        // uprice: totalPrice.toString(), // Not in Ballerina record
      };
  
      const response = await fetch('http://localhost:8083/budget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(budgetData),
      });
  
      if (response.ok) {
        setSelectedCards([]);
        localStorage.removeItem('selectedCards');
        alert('Budget submitted successfully!');
      } else {
        alert('Failed to submit budget.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Error occurred while submitting the budget.');
    }
  };

  // Calculate total price of selected cards
  const totalPrice = selectedCards.reduce((total, card) => total + card.price, 0);

  return (
    <div>
      <Navbar />
      <div className='main-content'>
        <div className='main-content-budget'>
          <div className="sidebar">
            <ol className="steps">
              <li className="step"><Link to="/newEvent">1</Link></li>
              <li className="step"><Link to="/newEvent/Category">2</Link></li>
              <li className="step"><Link to="/newEvent/ResourcePerson">3</Link></li>
              <li className="step"><Link to="/newEvent/Charity">4</Link></li>
              <li className="step current"><Link to="/newEvent/Budget">5</Link></li>
            </ol>
          </div>

          <div className="content">
            <div className="budget-header-main">
              <div className="budget-header111">
                <div className="budget-budget-header">
                  <h2>Step 5</h2>
                  <div className="electronics-budget">
                    <img src={dollar} alt="budget" width='50px' />
                    <h3>LKR {totalPrice}</h3>
                  </div>
                </div>

                <h3 className='budget-list-title'>Event Budget List</h3>

                <div className="cart-section">
                  {selectedCards.length > 0 ? (
                    <>
                      {selectedCards.map((card, index) => (
                        <div key={index} className="card-budget">
                          <img src={card.imgSrc} alt="" width='70px' />
                          <div className='card-budget-title'>
                            <h3>{card.name}</h3>
                            <p>{card.phone}</p>
                            <p>{card.email}</p>
                            <p>{card.location}</p>
                          </div>
                          <div className='card-budget-price'>
                            <p>Price: LKR {card.price}</p>
                          </div>
                          <div className='card-budget-delete'>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                          </div>
                        </div>
                      ))}
                      <div className='budget-total'>
                        <h3>Total Budget: LKR {totalPrice}.00</h3>
                        <button onClick={handleSubmit}>Submit</button>
                      </div>
                    </>
                  ) : (
                    <p>No cards selected yet.</p>
                  )}
                </div>
              </div>

              {/* Budget submit form */}
              <div className="budget-submit-form">
                <h3 className="budget-submit-form1">Your Details</h3>
                <div className="budget-submit-form-name">
                  <p>Name</p>
                  <input
                    className="budget-submit-form2"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Capture form input
                  />
                </div>
                <div className="budget-submit-form-email">
                  <p>Email</p>
                  <input
                    className="budget-submit-form2"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Capture form input
                  />
                </div>
                <div className="budget-submit-form-phone">
                  <p>Phone</p>
                  <input
                    className="budget-submit-form2"
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} // Capture form input
                  />
                </div>
                <div className="budget-submit-form-date">
                  <p>Date</p>
                  <input
                    className="budget-submit-form2"
                    type="text" // Change to date input type
                    value={date}
                    onChange={(e) => setDate(e.target.value)} // Capture form input
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;
