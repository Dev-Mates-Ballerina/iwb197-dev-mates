import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import dollar from '../../images/dollar.png'; // Add appropriate image paths
import '../../css/Catering.css';
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';
import '../../css/Catering.css'

function Catering() {
    const { addCard } = useContext(DataContext);

    const cardsData = [
        {
            name: "Mahesh Caters",
            description: "Discover unparalleled catering services at Warna Caterers, the #1 catering service in Colombo, Sri Lanka since 1999.",
            contact: "0711234567",
            price: "20,000 LKR Onwards",
            imgSrc: "/images/mahesh-caters.jpg" // Replace with actual image path
        },
        {
            name: "Bashitha Catering",
            description: "Dedicated towards culinary excellence to create memorable food experiences.",
            contact: "0711234567",
            price: "40,000 LKR Onwards",
            imgSrc: "/images/bashitha-catering.jpg" // Replace with actual image path
        },
        {
            name: "Kalana Caters",
            description: "Kalana caters is the exclusive airline caterer in Sri Lanka, a rapidly expanding hub for global travel.",
            contact: "0711234567",
            price: "20,000 LKR Onwards",
            imgSrc: "/images/kalana-caters.jpg" // Replace with actual image path
        },
        {
            name: "Sahan Caters",
            description: "Fusion Cuisine, North Indian, Chinese & BBQ. Best Caterers in Colombo. A perfect Banquet space for all occasions.",
            contact: "0711234567",
            price: "30,000 LKR Onwards",
            imgSrc: "/images/sahan-caters.jpg" // Replace with actual image path
        },
        {
            name: "Green Chef",
            description: "Our culinary team offers a variety of menus and can customize a menu to fulfil your outdoor catering needs.",
            contact: "0711234567",
            price: "10,000 LKR Onwards",
            imgSrc: "/images/green-chef.jpg" // Replace with actual image path
        },
        {
            name: "Eventless Catering",
            description: "We are pleased to extend our catering services for any event within Colombo: birthday parties, cocktails, weddings.",
            contact: "0711234567",
            price: "15,000 LKR Onwards",
            imgSrc: "/images/eventless-catering.jpg" // Replace with actual image path
        }
    ];

    const handleSubmit = (card) => {
        addCard(card);
    };

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
                            <div className="budget">
                                <img src={dollar} alt="Budget" width="50px" />
                                <h3>LKR 50 000</h3>
                            </div>
                        </div>

                        <p className="description">Select the Catering Service you want</p>
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
                                    <div className="card-btn">
                                        <button className="save-button" onClick={() => handleSubmit(card)}>Choose</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="back-button">Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catering;
