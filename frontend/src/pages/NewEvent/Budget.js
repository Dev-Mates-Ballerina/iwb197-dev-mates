import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import Navbar from '../../components/Navbar';
import '../../css/Budget.css';
import { Link } from 'react-router-dom';
import dollar from '../../images/dollar.png';

function Budget() {
  const { selectedCards, setSelectedCards } = useContext(DataContext);

  // Function to delete a specific card
  const handleDelete = (indexToDelete) => {
      const updatedCards = selectedCards.filter((_, index) => index !== indexToDelete);
      setSelectedCards(updatedCards);
      localStorage.setItem('selectedCards', JSON.stringify(updatedCards));
  };

  // Function to clear all cards and submit the budget
  const handleSubmit = async () => {
    try {
        // Create a single budget object with aggregated values
        const budgetData = {
            name: selectedCards[0]?.name || "Default Event Name", // Use the first card's name or a default name
            email: selectedCards[0]?.email || "default_email@example.com", // Use the first card's email or a default
            phone: selectedCards[0]?.phone || "0000000000", // Use the first card's phone or a default
            price: totalPrice.toString(), // Ensure the total price is a string
        };

        const response = await fetch('http://localhost:8083/budget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(budgetData), // Send a single budget object
        });

        if (response.ok) {
            // If the API call is successful, clear the local storage and state
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
      <Navbar/>
      <div className='main-content'>
        <div className='main-content-budget'>
          <div className="sidebar">
            <ol className="steps">
              <li className="step"><Link to="/newEvent">1</Link></li>
              <li className="step"><Link to="/newEvent/Category">2</Link></li>
              <li className="step"><Link to="/newEvent/ResourcePerson">3</Link></li>
              <li className="step"><Link to="/newEvent/Charity">4</Link></li>
              <li className="step current"><Link href="/newEvent/Budget">5</Link></li>
            </ol>
          </div>

          <div className="content">
            <div className="budget-budget-header">
              <h2>Step 5</h2>
              <div className="electronics-budget">
                  <img src={dollar} alt="budget" width='50px'/>
                  <h3>LKR {totalPrice}</h3>
              </div>
            </div>

            {/* Cart-style UI */}
            <h3 className='budget-list-title'>Event Budget List</h3>

            <div className="cart-section">
              {selectedCards.length > 0 ? (
                <>
                  {selectedCards.map((card, index) => (
                    <div key={index} className="card-budget">
                      <img src={card.imgSrc} alt=""  width='70px'/>
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
                    <h3>Total Budget:  LKR {totalPrice}.00</h3> {/* Display total price */}
                    <button onClick={handleSubmit}>Submit</button> 
                  </div>
                </>
              ) : (
                <p>No cards selected yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;
