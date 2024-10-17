import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';
import Navbar from '../../components/Navbar';
import '../../css/Budget.css';
import { Link } from 'react-router-dom';

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
            <li className="step"><Link to="/newEvent">1</Link></li>
              <li className="step"><Link to="/newEvent/Category">2</Link></li>
              <li className="step"><Link to="/newEvent/ResourcePerson">3</Link></li>
              <li className="step"><Link to="/newEvent/Charity">4</Link></li>
              <li className="step current"><Link href="/newEvent/Budget">5</Link></li>
            </ol>
          </div>

          <div className="content">
            <div className="budget-header">
              <h2>Step 5</h2>
              
            </div>
          {/* Cart-style UI */}
          <h3 className='budget-list-title'>Event Budget List</h3>

            <div className="cart-section">

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
