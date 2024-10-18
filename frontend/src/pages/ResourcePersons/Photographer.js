import React, { useContext, useState } from 'react';
import Navbar from '../../components/Navbar';
import p2 from '../../images/p2.png';
import p1 from '../../images/p1.png';
import p3 from '../../images/p3.jpeg';
import p4 from '../../images/p4.jpeg';
import p5 from '../../images/p5.jpeg';
import dollar from '../../images/dollar.png';
import '../../css/Photographer.css';
import '../../css/Category.css';
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';

function Photographer() {
    const { addCard, selectedCards } = useContext(DataContext); // Get selectedCards from context
    const [clickedButtons, setClickedButtons] = useState([]); // State to track clicked buttons

    const cardsData = [
        {
            name: "Chamara Herath",
            location: "Colombo, Sri Lanka",
            description: "An expert in wedding and fashion photography, Chamara has worked with top brands across Sri Lanka.",
            imgSrc: p2,
            price: 50000
        },
        {
            name: "Amal Perera",
            location: "Kandy, Sri Lanka",
            description: "Specializing in nature and landscape photography, Amal's work captures the essence of Sri Lanka's beauty.",
            imgSrc: p1,
            price: 40000
        },
        {
            name: "Dilshan Weerasinghe",
            location: "Galle, Sri Lanka",
            description: "Dilshan is known for his creative portraiture and has been featured in several international exhibitions.",
            imgSrc: p3,
            price: 45000
        },
        {
            name: "Kasun Jayawardena",
            location: "Jaffna, Sri Lanka",
            description: "Kasun's unique approach to event photography makes him one of the most sought-after photographers in the region.",
            imgSrc: p4,
            price: 35000
        },
        {
            name: "Shenali Fernando",
            location: "Negombo, Sri Lanka",
            description: "Shenali specializes in food and product photography and works with some of Sri Lanka's best-known brands.",
            imgSrc: p5,
            price: 30000
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
                <div className='main-content-photographer'>
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
                        <p className="description">Select the Supplier Category</p>
                        <p>Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. Please choose from the options so we can help you plan your events.</p>

                        <div className="cards-container-photographer">
                            {cardsData.map((card, index) => (
                                <div className="card-photographer" key={index}>
                                    <div className='card-img-photographer'>
                                        <img src={card.imgSrc} alt={card.name} className="card-img" />
                                    </div>
                                    <div className="card-details-photographer">
                                        <h3>{card.name}</h3>
                                        <p>{card.location}</p>
                                        <p>{card.description}</p>
                                        <p>LKR {card.price}</p>
                                    </div>
                                    <div className='card-btn-photographer'>
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

export default Photographer;
