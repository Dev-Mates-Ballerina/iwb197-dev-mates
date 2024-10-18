import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import vehi1 from '../../images/vehi1.jpeg';
import vehi2 from '../../images/vehi2.jpeg';
import vehi3 from '../../images/vehi3.jpeg';
import vehi4 from '../../images/vehi4.jpeg';
import vehi5 from '../../images/vehi5.jpeg';
import vehi6 from '../../images/vehi6.jpeg';
import dollar from '../../images/dollar.png'
import { Link } from'react-router-dom'
import '../../css/Vehicles.css'
import { DataContext } from '../../context/DataProvider';


function Vehicles() {

    const { addCard, selectedCards } = useContext(DataContext); // Get selectedCards from context
    const [clickedButtons, setClickedButtons] = useState([]); // State to t

    const cardsData = [
        {
          name: "Mahesh Cab Services",
          email: "mahesh@gmail.com",
          phone: "0711234567",
          price: 12000,
          imgSrc: vehi1
        },
        {
          name: "Bashitha Rent A Car",
          email: "bashitha@gmail.com",
          phone: "0711234567",
          price: 10000,
          imgSrc: vehi2
        },
        {
          name: "Kalana Cabs",
          email: "kalana@gmail.com",
          phone: "0711234567",
          price: 5000,
          imgSrc: vehi3
        },
        {
          name: "Sahan Vehicle House",
          email: "sahan@gmail.com",
          phone: "0711234567",
          price: 9000,
          imgSrc: vehi4
        },
        {
          name: "Green Cabs House",
          email: "green@gmail.com",
          phone: "0711234567",
          price: 8000,
          imgSrc: vehi5
        },
        {
          name: "Eventless Rent A Car",
          email: "eventless@gmail.com",
          phone: "0711234567",
          price: 11000,
          imgSrc: vehi6
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
      <div class="main-content">
        <div className='vehicles-main-content'>
            <div class="sidebar1">
              <ol class="steps">
                <li class="step"><Link to='/newEvent'>1</Link></li>
                <li class="step"><Link to='/newEvent/Category'>2</Link></li>
                <li class="step current"><Link to='/newEvent/ResourcePerson'>3</Link></li>
                <li class="step"><Link to='/newEvent/Charity'>4</Link></li>
                <li class="step"><Link to='/newEvent/Budget'>5</Link></li>
              </ol>
            </div>
            <div class="vehicles-content">
            <div className="vehicles-budget-header">
              <h2>Step 3</h2>
              
            </div>
              <p class="vehicles-p1">Select the Vehicle Service you want</p>
              <p className='vehicles-p2'>Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. Please choose from the options so we can help you plan your events.</p>
            <div class="vehicleServices">
              <div class="vehicle">
                  
                  {cardsData.map((card, index) => (
                <div className="vehicle1" key={index}>
                  <div className="card-img">
                    <img src={card.imgSrc} alt={card.name} className="card-img" />
                  </div>
                  <div className="card-details-vehicle">
                    <h3>{card.name}</h3>
                    <p>{card.email}</p>
                    <p>{card.phone}</p>
                    <p>LKR {card.price}</p>
                  </div>
                  <div className="card-btn-vehicle">
                  <button
                    className={`save-button ${isCardSelected(card.name) ? 'green' : ''}`} // Add 'green' class if selected
                    onClick={() => handleSubmit(card)}
                    disabled={isCardSelected(card.name)} // Disable the button if selected
                >
                    {isCardSelected(card.name) ? 'Selected' : 'Choose'}
                </button>
                  </div>
                </div>
              ))}

                </div>
                <Link to="/newEvent/ResourcePerson"><button className="back-button">Back</button></Link>
            </div> 

          </div>
          </div>
          </div>
          </div>
  )
}

export default Vehicles
