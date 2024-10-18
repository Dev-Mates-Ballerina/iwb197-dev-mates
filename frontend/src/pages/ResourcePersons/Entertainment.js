import React, { useContext, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import '../../css/Entertainment.css';
import dan1 from '../../images/dan1.jpeg';
import dan2 from '../../images/dan2.jpeg';
import dan3 from '../../images/dan3.jpeg';
import dj1 from '../../images/dj1.jpeg';
import dj2 from '../../images/dj2.jpeg';
import dj3 from '../../images/dj3.jpeg';
import dollar from '../../images/dollar.png';
import { DataContext } from '../../context/DataProvider';

function Entertainment() {
  const { addCard, selectedCards } = useContext(DataContext); // Get selectedCards from context
  const [clickedButtons, setClickedButtons] = useState([]); // State

  const cardsData = {
    danceTeams: [
      {
        name: "CV Crew",
        email: "cvcrew@gmail.com",
        phone: "0711234567",
        price: 10000,
        imgSrc: dan1
      },
      {
        name: "BMK Dancers",
        email: "bmkdancers@gmail.com",
        phone: "0711234567",
        price: 15000,
        imgSrc: dan2
      },
      {
        name: "Shadow Girls",
        email: "shadow@gmail.com",
        phone: "0711234567",
        price: 20000,
        imgSrc: dan3
      }
    ],
    djTeams: [
      {
        name: "DJ M",
        email: "djm@gmail.com",
        phone: "0711234567",
        price: 15000,
        imgSrc: dj1
      },
      {
        name: "DJ Song",
        email: "djsong@gmail.com",
        phone: "0711234567",
        price: 20000,
        imgSrc: dj2
      },
      {
        name: "DJ Mix",
        email: "djmix@gmail.com",
        phone: "0711234567",
        price: 30000,
        imgSrc: dj3
      }
    ]
  };

  const handleSubmit = (card) => {
    addCard(card);
    setClickedButtons([...clickedButtons, card.name]); // Add the selected card's name to clickedButtons
};

const isCardSelected = (cardName) => clickedButtons.includes(cardName) || selectedCards.some(card => card.name === cardName); // Check if the card is already selected

  return (
    <div>
      <Navbar/>
      <div className="main-content">
        <div className='main-content-entertainment'>
          <div className='main-content-entertainment-sidebar'>
            <div className="sidebar1">
              <ol className="steps">
                <li className="step"><Link to='/newEvent'>1</Link></li>
                <li className="step"><Link to='/newEvent/Category'>2</Link></li>
                <li className="step current"><Link to='/newEvent/ResourcePerson'>3</Link></li>
                <li className="step"><Link to='/newEvent/Charity'>4</Link></li>
                <li className="step"><Link to='/newEvent/Budget'>5</Link></li>
              </ol>
            </div>
          </div>
          <div className="entertainment-page-rightSide">
            <div className='entertainment-page-rightSide-header'>
              <h2 className='entertainment-page-rightSideH2'>Step 3</h2>
        
            </div>
            <p className="entertainment-page-rightSideP1">Select the Entertainment Category you want</p>
            <p className="entertainment-page-rightSideP2">Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. Please choose from the options so we can help you plan your events.</p>

            <div className="entertainmentCategory">
              <div className="dance">
                <h4 className='danceH4'>Select the Dancing team you want</h4>
                <div className="dancingTeams">
                  {cardsData.danceTeams.map((card, index) => (
                    <div className="dance1" key={index}>
                      <div>
                        <img src={card.imgSrc} alt={card.name} />
                      </div>
                      <div className='dance1-para'>
                        <h3>{card.name}</h3>
                        <p>{card.email}</p>
                        <p>{card.phone}</p>
                        <p>LKR {card.price}</p>
                      </div>
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

              <div className="DJ">
                <h4 className="djTeamsBH4">Select the DJ team you want</h4>
                <div className="DJteams">
                  {cardsData.djTeams.map((card, index) => (
                    <div className="DJ1" key={index}>
                      <div>
                        <img src={card.imgSrc} alt={card.name} />
                      </div>
                      <div className='card-details-vehicle'>
                        <h3>{card.name}</h3>
                        <p>{card.email}</p>
                        <p>{card.phone}</p>
                        <p>LKR {card.price}</p>
                      </div>
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
            </div>

            <button className="entertainment-back-button">Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entertainment;
