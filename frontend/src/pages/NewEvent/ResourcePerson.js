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
            <li class="step "><Link to='/newEvent'>1</Link></li>
                  <li class="step"><Link to='/newEvent/Category'>2</Link></li>
                  <li class="step current"><Link to='/newEvent/ResourcePerson'>3</Link></li>
                  <li class="step"><Link to='/newEvent/Charity'>4</Link></li>
                  <li class="step"><Link to='/newEvent/Budget'>5</Link></li>
            </ol>
        </div>

        <div class="content">
            <div className="budget-header">
              <h2 className='step3'>Step 3</h2>
        
            </div>
            <div className="budget-p">
                <p class="description1">Select the Supplier Category</p>
                <p className='description2'>Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. Please choose from the options so we can help you plan your events.</p>
            </div>
            <div class="categories1">
                <Link to="/newEvent/ResourcePerson/Photographers"><div class="category-item">
                    <img src={photographer} alt="Photographers" />
                    <p>Photographers</p>
                </div></Link>
                <Link to="/newEvent/ResourcePerson/Entertainment"><div class="category-item">
                    <img src={dancers} alt="Entertainment" />
                    <p>Entertainment</p>
                </div></Link> 
                <Link to="/newEvent/ResourcePerson/Catering"><div class="category-item">
                    <img src={catering} alt="Catering" />
                    <p>Catering</p>
                </div></Link>
                <Link to="/newEvent/ResourcePerson/Locations"><div class="category-item">
                    <img src={location} alt="Locations" />
                    <p>Locations</p>
                </div></Link>
                <Link to="/newEvent/ResourcePerson/Vehicles"><div class="category-item">
                    <img src={vehicle} alt="Vehicles" />
                    <p>Vehicles</p>
                </div></Link>
                <Link to="/newEvent/ResourcePerson/Decorations"><div class="category-item">
                    <img src={decorations} alt="Decorations" />
                    <p>Decorations</p>
                </div></Link>
                <Link to="/newEvent/ResourcePerson/Electronics"><div class="category-item">
                    <img src={electronics} alt="Electronics" />
                    <p>Electronics</p>
                </div></Link>
                <div class="category-item">
                    <img src={other} alt="Other" />
                    <p>Other</p>
                </div>
            </div>
            
            <Link to='/newEvent/Charity' class="next-button2">Next</Link>
        </div>
        </div>

      </div>
    </div>

  )
}

export default ResourcePerson
