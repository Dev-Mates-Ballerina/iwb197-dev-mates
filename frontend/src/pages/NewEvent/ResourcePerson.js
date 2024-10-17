import React from 'react'
import photographer from '../../images/photographer.png'
import dancers from '../../images/dancing.png'
import location from '../../images/location(3).png'
import other from '../../images/application.png'
import catering from '../../images/catering.png'
import vehicle from '../../images/distribution.png'
import electronics from '../../images/gadget.png'
import decorations from '../../images/flags.png'
import dollar from '../../images/dollar.png'
import Navbar from '../../components/Navbar'
import '../../css/ResourcePerson.css'
import { Link } from 'react-router-dom'

function ResourcePerson() {
  return (
    <div>
      <Navbar/>
      <div className="main-content">
        <div className='main-content-resource-person'>
        <div class="sidebar">
            <ol class="steps">
                <li class="step"><a href="/create-event">1</a></li>
                <li class="step "><a href="/category">2</a></li>
                <li class="step current"><a href="/newEvent/ResourcePerson">3</a></li>
                <li class="step"><a href="/create-event">4</a></li>
                <li class="step"><a href="/create-event">5</a></li>
            </ol>
        </div>

        <div class="content">
            <div className="budget-header">
              <h2 className='step3'>Step 3</h2>
              <div className="budget">
                <img src={dollar} alt="" width='50px'/>
                <h3 className='price'>LKR 0</h3>
              </div>
            </div>
            <p class="description">Select the Supplier Category</p>
            <p className='description2'>Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. Please choose from the options so we can help you plan your events.</p>
            
            <div class="categories">
                <Link to="/newEvent/ResourcePerson/Photographers"><div class="category-item">
                    <img src={photographer} alt="Photographers" />
                    <p>Photographers</p>
                </div></Link>
                <a href="/new-event/entertainment"><div class="category-item">
                    <img src={dancers} alt="Entertainment" />
                    <p>Entertainment</p>
                </div></a> 
                <a href="/new-event/catering"><div class="category-item">
                    <img src={catering} alt="Catering" />
                    <p>Catering</p>
                </div></a>
                <a href="/new-event/locations"><div class="category-item">
                    <img src={location} alt="Locations" />
                    <p>Locations</p>
                </div></a>
                <a href="/new-event/vehicles"><div class="category-item">
                    <img src={vehicle} alt="Vehicles" />
                    <p>Vehicles</p>
                </div></a>
                <a href="/new-event/decorations"><div class="category-item">
                    <img src={decorations} alt="Decorations" />
                    <p>Decorations</p>
                </div></a>
                <a href="/new-event/electronics"><div class="category-item">
                    <img src={electronics} alt="Electronics" />
                    <p>Electronics</p>
                </div></a>
                <div class="category-item">
                    <img src={other} alt="Other" />
                    <p>Other</p>
                </div>
            </div>
            
            <button class="next-button">Next</button>
        </div>
        </div>

      </div>
    </div>

  )
}

export default ResourcePerson
