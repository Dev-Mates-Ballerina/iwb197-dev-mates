import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import loc1 from '../../images/loc1.jpeg'
import loc2 from '../../images/loc2.jpeg'
import loc3 from '../../images/loc3.jpeg'
import { Link } from 'react-router-dom'
import '../../css/Locations.css'
import { DataContext } from '../../context/DataProvider';

function Locations() {
    const { addCard, selectedCards } = useContext(DataContext); // Get selectedCards from context
    const [clickedButtons, setClickedButtons] = useState([]); // State

  const CardsData = [
    {
        name: "Coofy Castle",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat temporibus commodi fugit tempore nesciunt, distinctio accusantium repudiandae.",
        imgSrc: loc1,
        price: 100000,
        rating: 4.5,
        reviews: 1000
    },
    {
        name: "Krusty BBQ",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat temporibus commodi fugit tempore nesciunt, distinctio accusantium repudiandae.",
        imgSrc: loc2,
        price: 50000,
        rating: 4.5,
        reviews: 800
    },
    {
        name: "Windy Bar",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat temporibus commodi fugit tempore nesciunt, distinctio accusantium repudiandae.",
        imgSrc: loc3,
        price: 70000,
        rating: 4.5,
        reviews: 350
    }
    
  ];
  const handleSubmit = (card) => {
    addCard(card);
    setClickedButtons([...clickedButtons, card.name]); // Add the selected card's name to clickedButtons
};

const isCardSelected = (cardName) => clickedButtons.includes(cardName) || selectedCards.some(card => card.name === cardName); // Check if the card is already selected
  return (
    <div>
      <Navbar/>
      <div className="main-content">
        <div className='main-content-locations'>
          <div className="sidebar1">
            <ol className="steps">
              <li className="step"><Link to="/newEvent">1</Link></li>
              <li className="step"><Link to="/newEvent/Category">2</Link></li>
              <li className="step current"><Link to="/newEvent/ResourcePerson">3</Link></li>
              <li className="step"><Link to="/newEvent/Charity">4</Link></li>
              <li className="step"><Link to="/newEvent/Budget">5</Link></li>
            </ol>
          </div>

          <div className="content">
            <div className="budget-header">
              <h2>Step 3</h2>
             
            </div>
            
            <p className="description123">Select the Location you want</p>
            <p>Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. Please choose from the options so we can help you plan your events.</p>
          
            <div className="locations">
              <div className="location-cards">
                {CardsData.map((card, index) => (
                  <div key={index} className="card">
                    <img src={card.imgSrc} alt={card.name} className="card-img" />
                    <h4>{card.name}</h4>
                    <p>{card.description}</p>
                    <p>{card.price}</p>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="rating-count">{card.rating} ({card.reviews})</span>
                    <button
                className={`save-button ${isCardSelected(card.name) ? 'green' : ''}`} // Add 'green' class if selected
                onClick={() => handleSubmit(card)}
                disabled={isCardSelected(card.name)} // Disable the button if selected
            >
                {isCardSelected(card.name) ? 'Selected' : 'Choose'}
            </button>
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/newEvent/ResourcePerson"><button className="back-button">Back</button></Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations;
