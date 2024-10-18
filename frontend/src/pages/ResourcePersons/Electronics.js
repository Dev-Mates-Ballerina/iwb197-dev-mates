import React, { useContext, useState } from 'react';
import Navbar from '../../components/Navbar';
import elec1 from '../../images/elec1.jpeg';
import elec2 from '../../images/elec2.jpeg';
import elec3 from '../../images/elec3.jpeg';
import elec4 from '../../images/elec4.jpeg';
import elec5 from '../../images/elec5.jpeg';
import elec6 from '../../images/elec6.jpeg';
import dollar from '../../images/dollar.png';
import { Link } from 'react-router-dom';
import '../../css/Electronics.css';
import { DataContext } from '../../context/DataProvider';

function Electronics() {
  const { addCard, selectedCards } = useContext(DataContext); // Get selectedCards from context
  const [clickedButtons, setClickedButtons] = useState([]); // State

    const electronicsData = [
        {
          name: "EventTech Solutions",
          email: "sales@eventtechsl.com",
          phone: "(011) 223-5678",
          price: 25000,
          imgSrc: elec1
        },
        {
          name: "TechZone Rentals",
          email: "info@techzonerentals.com",
          phone: "(011) 334-6789",
          price: 15000,
          imgSrc: elec2
        },
        {
          name: "AudioVisual Masters",
          email: "contact@avmasters.lk",
          phone: "(011) 445-7890",
          price: 30000,
          imgSrc: elec3
        },
        {
          name: "ProEvents Electronics",
          email: "service@proeventselectronics.com",
          phone: "(011) 556-8901",
          price: 40000,
          imgSrc: elec4
        },
        {
          name: "LiveTech Supplies",
          email: "support@livetechsupplies.lk",
          phone: "(011) 667-9012",
          price: 20000,
          imgSrc: elec5
        },
        {
          name: "Event Gear Hub",
          email: "inquiries@eventgearhub.com",
          phone: "(011) 778-0123",
          price: 18000,
          imgSrc: elec6
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
                <div className="electronics-main-content">
                    <div className="sidebar1">
                        <ol className="steps">
                            <li className="step"><Link to='/newEvent'>1</Link></li>
                            <li className="step"><Link to='/newEvent/Category'>2</Link></li>
                            <li className="step current"><Link to='/newEvent/ResourcePerson'>3</Link></li>
                            <li className="step"><Link to='/newEvent/Charity'>4</Link></li>
                            <li className="step"><Link to='/newEvent/Budget'>5</Link></li>
                        </ol>
                    </div>
                    <div className="electronics-content">
                        <div className="electronics-budget-header">
                            <h2>Step 3</h2>
                         
                        </div>
                        <p className="electronics-descriptionP1">Select the Electronics Category you want</p>
                        <p className="electronics-descriptionP2">Cultural events, tech events, corporate events, and more. Please choose an option to help us plan your events.</p>

                        <div className="electronicCategory">
                          <div className='electronicTeams'>
                          {electronicsData.map((electronic, index) => (
                                <div className="electronic1" key={index}>
                                    <div className="card-img">
                                        <img src={electronic.imgSrc} alt={electronic.name} className="card-img" />
                                    </div>
                                    <div className="card-details-electronic">
                                        <h3>{electronic.name}</h3>
                                        <p>{electronic.email}</p>
                                        <p>{electronic.phone}</p>
                                        <p>LKR {electronic.price}</p>
                                    </div>
                                    <div className="card-btn-electronic">
                                    <button
                                        className={`save-button ${isCardSelected(electronic.name) ? 'green' : ''}`} // Add 'green' class if selected
                                        onClick={() => handleSubmit(electronic)}
                                        disabled={isCardSelected(electronic.name)} // Disable the button if selected
                                    >
                                        {isCardSelected(electronic.name) ? 'Selected' : 'Choose'}
                                    </button>
                                    </div>
                                </div>
                            ))}
                          </div>

                        </div>
                        <button className="electronics-back-button">Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Electronics;
