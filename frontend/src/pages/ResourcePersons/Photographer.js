import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import p2 from '../../images/p2.png';
import dollar from '../../images/dollar.png';
import '../../css/Photographer.css'
import '../../css/Category.css'
import { DataContext } from '../../context/DataProvider';


function Photographer() {

    const { addCard } = useContext(DataContext);

    const cardsData = [
        {
            name: "Card Name",
            location: "Card Location",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imgSrc: 'ff',
            price: 100
        },
        {
            name: "Card Name",
            location: "Card Location",
            description: "Card Description",
            imgSrc: "image-source-url",
            price: 200
        },
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
              <li className="step"><a href="/create-event">1</a></li>
              <li className="step"><a href="/category">2</a></li>
              <li className="step current"><a href="/new-event">3</a></li>
              <li className="step"><a href="/create-event">4</a></li>
              <li className="step"><a href="/create-event">5</a></li>
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
            <button className="save-button">Save</button>
          </div>
        </div>

        </div>
    </div>
  )
}

export default Photographer
