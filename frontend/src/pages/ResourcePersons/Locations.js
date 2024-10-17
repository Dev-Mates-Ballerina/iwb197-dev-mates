import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import '../../css/Locations.css'
import { DataContext } from '../../context/DataProvider';

function Locations() {
    const { addCard } = useContext(DataContext);

  const CardsData = [
    {
        name: "Coofy Castle",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat temporibus commodi fugit tempore nesciunt, distinctio accusantium repudiandae.",
        imgSrc: '/images/coofy-castle.jpg',
        price: 100000,
        rating: 4.5,
        reviews: 1000
    },
    {
        name: "Krusty BBQ",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat temporibus commodi fugit tempore nesciunt, distinctio accusantium repudiandae.",
        imgSrc: '/images/krusty-bbq.jpg',
        price: 50000,
        rating: 4.5,
        reviews: 800
    },
    {
        name: "Windy Bar",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat temporibus commodi fugit tempore nesciunt, distinctio accusantium repudiandae.",
        imgSrc: '/images/windy-bar.jpg',
        price: 70000,
        rating: 4.5,
        reviews: 350
    }
    
  ];
    const handleSubmit = (card) => {
        addCard(card);
    };

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
              <div className="budget">
                <img src={''} alt="" width='50px' />
                <h3>LKR 50 000</h3>
              </div>
            </div>
            
            <p className="description">Select the Location you want</p>
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
                    <button className="save-button-locations"  onClick={() => handleSubmit(card)}>Choose</button>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="back-button">Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations;