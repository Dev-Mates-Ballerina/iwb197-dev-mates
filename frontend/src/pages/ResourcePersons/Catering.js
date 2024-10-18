import React, { useContext, useState } from 'react';
import Navbar from '../../components/Navbar';
import dollar from '../../images/dollar.png'; // Add appropriate image paths
import '../../css/Catering.css';
import c1 from '../../images/c1.jpg'; 
import c2 from '../../images/c2.jpg';
import c3 from '../../images/c3.jpg';
import c4 from '../../images/c4.jpg';
import c5 from '../../images/c5.jpg';
import c6 from '../../images/c6.jpg';
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';
import '../../css/Catering.css'

function Catering() {
  const { addCard, selectedCards } = useContext(DataContext); // Get selectedCards from context
  const [clickedButtons, setClickedButtons] = useState([]); // State

    const cardsData = [
        {
            name: "Mahesh Caters",
            description: "Discover unparalleled catering services at Warna Caterers, the #1 catering service in Colombo, Sri Lanka since 1999.",
            contact: "0711234567",
            price: 20000,
            imgSrc: c1 // Replace with actual image path
        },
        {
            name: "Bashitha Catering",
            description: "Dedicated towards culinary excellence to create memorable food experiences.",
            contact: "0711234567",
            price: 40000,
            imgSrc: c2 // Replace with actual image path
        },
        {
            name: "Kalana Caters",
            description: "Kalana caters is the exclusive airline caterer in Sri Lanka, a rapidly expanding hub for global travel.",
            contact: "0711234567",
            price: 20000,
            imgSrc: c3 // Replace with actual image path
        },
        {
            name: "Sahan Caters",
            description: "Fusion Cuisine, North Indian, Chinese & BBQ. Best Caterers in Colombo. A perfect Banquet space for all occasions.",
            contact: "0711234567",
            price: 30000,
            imgSrc: c4 // Replace with actual image path
        },
        {
            name: "Green Chef",
            description: "Our culinary team offers a variety of menus and can customize a menu to fulfil your outdoor catering needs.",
            contact: "0711234567",
            price: 10000,
            imgSrc: c5 // Replace with actual image path
        },
        {
            name: "Eventless Catering",
            description: "We are pleased to extend our catering services for any event within Colombo: birthday parties, cocktails, weddings.",
            contact: "0711234567",
            price: 15000,
            imgSrc: c6 // Replace with actual image path
        }
    ];

    const handleSubmit = (card) => {
      addCard(card);
      setClickedButtons([...clickedButtons, card.name]); // Add the selected card's name to clickedButtons
  };
  
  const isCardSelected = (cardName) => clickedButtons.includes(cardName) || selectedCards.some(card => card.name === cardName); // Check if the card is already selected
    return (
        <div>
            <Navbar />
            <div className="main-content">
                <div className="main-content-catering">
                    <div className="sidebar">
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

                        <p className="description12">Select the Catering Service you want</p>
                        <div className="cards-container">
                            {cardsData.map((card, index) => (
                                <div className="card-catering" key={index}>
                                    <div className="card-img">
                                        <img src={card.imgSrc} alt={card.name} className="card-img" />
                                    </div>
                                    <div className="card-details-catering">
                                        <h3>{card.name}</h3>
                                        <p>{card.description}</p>
                                        <p>{card.contact}</p>
                                        <p>{card.price}</p>
                                    </div>
                                    <div className="card-btn1">
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
    );
}

export default Catering;
