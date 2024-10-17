import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import p2 from '../../images/p2.png';
import dollar from '../../images/dollar.png';
import '../../css/Photographer.css'
import '../../css/Category.css'
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';


function Photographer() {

    const { addCard } = useContext(DataContext);

    const cardsData = [
        {
            name: "Chamara Herath",
            location: "Colombo, Sri Lanka",
            description: "An expert in wedding and fashion photography, Chamara has worked with top brands across Sri Lanka.",
            imgSrc: "/images/chamara-herath.jpg", // Replace with your local directory path
            price: 50000
        },
        {
            name: "Amal Perera",
            location: "Kandy, Sri Lanka",
            description: "Specializing in nature and landscape photography, Amal's work captures the essence of Sri Lanka's beauty.",
            imgSrc: "/images/amal-perera.jpg", // Replace with your local directory path
            price: 40000
        },
        {
            name: "Dilshan Weerasinghe",
            location: "Galle, Sri Lanka",
            description: "Dilshan is known for his creative portraiture and has been featured in several international exhibitions.",
            imgSrc: "/images/dilshan-weerasinghe.jpg", // Replace with your local directory path
            price: 45000
        },
        {
            name: "Kasun Jayawardena",
            location: "Jaffna, Sri Lanka",
            description: "Kasun's unique approach to event photography makes him one of the most sought-after photographers in the region.",
            imgSrc: "/images/kasun-jayawardena.jpg", // Replace with your local directory path
            price: 35000
        },
        {
            name: "Shenali Fernando",
            location: "Negombo, Sri Lanka",
            description: "Shenali specializes in food and product photography and works with some of Sri Lanka's best-known brands.",
            imgSrc: "/images/shenali-fernando.jpg", // Replace with your local directory path
            price: 30000
        }
    ];
    

    const handleSubmit = (card) => {
        addCard(card);
    };


  return (
    <div>
      <Navbar/>
      <div className="main-content">
        <div className='main-content-photographer'>
        <div className="sidebar">
            <ol className="steps">
              <li className="step"><Link to="/newEvent">1</Link></li>
              <li className="step"><Link to="/newEvent/Category">2</Link></li>
              <li className="step current"><Link to="/newEvent/ResourcePerson">3</Link></li>
              <li className="step"><Link to="/newEvent/Charity">4</Link></li>
              <li className="step"><Link href="/newEvent/Budget">5</Link></li>
            </ol>
          </div>

          <div className="content">
            <div className="budget-header">
              <h2>Step 3</h2>
              <div className="budget">
                <img src={dollar} alt="" width='50px' />
                <h3>LKR 0</h3>
              </div>
            </div>
            <p className="description">Select the Supplier Category</p>
            <p>Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. Please choose from the options so we can help you plan your events.</p>

            <div className="cards-container">
              {/* {cardsData.map((card, index) => (
                <div key={index} className="card">
                <img src={card.imgSrc} alt={card.name} className="card-img" />
                <div className="card-details">
                  <h3>{card.name}</h3>
                  <p>{card.location}</p>
                  <p>{card.description}</p>
                  <button onClick={() => handleSubmit(card)}>Submit</button>
                </div>
              </div>
              ))}
 */}


            </div>
            {cardsData.map((card, index) => (
                <div className="card-photographer" key={index}>
                    <div className='card-img'>
                        <img src={card.imgSrc} alt={card.name} className="card-img" />
                    </div>
                    <div className="card-details-photographer">
                        <h3>{card.name}</h3>
                        <p>{card.location}</p>
                        <p>{card.description}</p>
                        <p>{card.price}</p>
                    </div>
                    <div className='card-btn'>
                        <button className='save-button' onClick={() => handleSubmit(card)}>Choose</button>
                    </div>
                </div>
            ))}
            
            <button className="back-button">Back</button>
          </div>
        </div>

        </div>
    </div>
  )
}

export default Photographer
