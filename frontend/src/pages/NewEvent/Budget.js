import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';
import Navbar from '../../components/Navbar';
import '../../css/Budget.css';

function Budget() {
  const { selectedCards, setSelectedCards } = useContext(DataContext);

  // Function to delete a specific card
  const handleDelete = (indexToDelete) => {
      const updatedCards = selectedCards.filter((_, index) => index !== indexToDelete);
      setSelectedCards(updatedCards);
      localStorage.setItem('selectedCards', JSON.stringify(updatedCards));
  };

  // Function to clear all cards
  const handleSubmit = () => {
      setSelectedCards([]);
      localStorage.removeItem('selectedCards');
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
              <li className="step"><a href="/create-event">1</a></li>
              <li className="step"><a href="/category">2</a></li>
              <li className="step current"><a href="/new-event">3</a></li>
              <li className="step"><a href="/create-event">4</a></li>
              <li className="step"><a href="/create-event">5</a></li>
            </ol>
          </div>

          <div className="content">
            <div className="budget-header">
              <h2>Step 5</h2>
              
            </div>
          {/* Cart-style UI */}
            <div className="cart-section">
              <h3>Event Budget Form</h3>

                {selectedCards.length > 0 ? (
              <>
                  {selectedCards.map((card, index) => (
                      <div key={index} className="card-budget">
                        <div className='card-budget-title'>
                          <h3>{card.name}</h3>
                          <p>{card.location}</p>
                        </div>
                        <div className='card-budget-price'>
                          <p>Price: ${card.price}</p>
                        </div>
                        <div className='card-budget-delete'>
                          <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                      </div>
                  ))}
                  <h3>Total Price: ${totalPrice}</h3> {/* Display total price */}
                  <button onClick={handleSubmit}>Submit</button> {/* Clears all data */}
              </>
          ) : (
              <p>No cards selected yet.</p>
          )}

            </div>
        </div>


      </div>


      </div>

    </div>
  )
}

export default Budget
