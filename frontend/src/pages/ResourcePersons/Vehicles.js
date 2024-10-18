import React, { useContext } from 'react'
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

    const { addCard } = useContext(DataContext);


    const vehicleData = [
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
    };

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
              <div className="vehicles-budget">
                <img src={dollar} alt="" width='50px'/>
                <h3>LKR 50 000</h3>
              </div>
            </div>
              <p class="vehicles-p1">Select the Vehicle Service you want</p>
              <p className='vehicles-p2'>Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. Please choose from the options so we can help you plan your events.</p>
            <div class="vehicleServices">
              <div class="vehicle">
                  
                  <div class="vehicle1">
                  {vehicleData.map((vehicle, index) => (
                <div className="card-vehicle" key={index}>
                  <div className="card-img">
                    <img src={vehicle.imgSrc} alt={vehicle.name} className="card-img" />
                  </div>
                  <div className="card-details-vehicle">
                    <h3>{vehicle.name}</h3>
                    <p>{vehicle.email}</p>
                    <p>{vehicle.phone}</p>
                    <p>LKR {vehicle.price}</p>
                  </div>
                  <div className="card-btn">
                    <button className="save-button" onClick={() => handleSubmit(vehicle)}>Choose</button>
                  </div>
                </div>
              ))}
                  </div>
                  <div class="vehicle3">
                    <div>
                      <img src={vehi3} />
                    </div>
                    <div className='vehicle-para'>
                      <p1>Kalana Cabs</p1>
                      <p>kalana@gmail.com</p>
                      <p>0711234567</p>
                      <p>LKR 5 000</p>
                    </div>  
                    <button class="vehicle-choose">Choose</button>
                  </div>
                </div>
            </div> 
              <div class="vehicleRow2">
                <div class="vehicle4">
                  <div>
                    <img src={vehi4} />
                  </div>
                  <div className='vehicle-para'>
                    <p1>Sahan Vehicle House</p1>
                    <p>sahan@gmail.com</p>
                    <p>0711234567</p>
                    <p>LKR 9 000</p>
                  </div>
                  <button class="vehicle-choose">Choose</button>
                </div>
                <div class="vehicle5">
                  <div>
                    <img src={vehi5} />
                  </div>
                  <div className='vehicle-para'>
                    <p1>Green Cabs House</p1>
                    <p>green@gmail.com</p>
                    <p>0711234567</p>
                    <p>LKR 8 000</p>
                  </div>
                  <button class="vehicle-choose">Choose</button>  
                </div>
                <div class="vehicle6">
                  <div>
                    <img src={vehi6} />
                  </div>
                  <div className='vehicle-para'>
                    <p1>Eventless Rent A car</p1>
                    <p>eventless@gmail.com</p>
                    <p>0711234567</p>
                    <p>LKR 11 000</p>
                  </div>    
                  <button class="vehicle-choose">Choose</button>
                </div>
                <div>
                  <button class="vehicle-back-button">Back</button>
                  <button class="vehicle-save-button">Save</button>
                </div>
              </div> 
          </div>
          </div>
          </div>
          </div>
  )
}

export default Vehicles
