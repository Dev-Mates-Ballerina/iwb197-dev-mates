import React from 'react'
import Navbar from '../../components/Navbar'
import '../../css/Category.css'
import { Link } from 'react-router-dom';
import dollar from '../../images/dollar.png';
import cultural from '../../images/cultural.png'
import tech from '../../images/tech.png'
import cooperate from '../../images/cooperate.png'
import other from '../../images/other.png'
import proms from '../../images/proms.png'
import party from '../../images/party.png'
import wedding from '../../images/wedding.png'
import engagement from '../../images/engagement.png'

function Category() {
  return (
    <div>
      <Navbar/>
      <div className='main-content'>
        <div className='category-selection-main-content'>
          <div className='category-selection-sidebar'>
            <div class="sidebar1">
              <ol class="steps">
                  <li class="step"><Link to='/newEvent'>1</Link></li>
                  <li class="step current"><Link to='/newEvent/Category'>2</Link></li>
                  <li class="step"><Link to='/newEvent/ResourcePerson'>3</Link></li>
                  <li class="step"><Link to='/newEvent/Charity'>4</Link></li>
                  <li class="step"><Link to='/newEvent/Budget'>5</Link></li>
              </ol>
            </div>
          </div>
          <div className='content'>
            <div className='category-selection-rightside-header'>
              <div>
                <h2 className='category-selection-rightside-headerH2'>Step 2</h2>
              </div>
         
            </div>
            <div className='category-selection-rightside-body'>
            <div>
              <p class="category-selection-rightside-body-descriptionP1">What kind of event are you planning?</p>
              <p className='category-selection-rightside-body-descriptionP2'>Cultural events, Tech events, corporate events, prom, parties, weddings, engagement parties, and others. Please choose from the options so we can help you plan your events.</p>
            </div>
            <div class="category-selection-categories">
                <div class="category-item">
                    <img src={cultural} alt="Photographers" />
                    <p>Cultural events</p>
                </div>
                <div class="category-item">
                    <img src={tech} alt="Entertainment" />
                    <p>Tech events</p>
                </div>
                <div class="category-item">
                    <img src={cooperate} alt="Catering" />
                    <p>Co-operate events</p>
                </div>
                <div class="category-item">
                    <img src={proms} alt="Locations" />
                    <p>Proms</p>
                </div>
                <div class="category-item">
                    <img src={party} alt="Vehicles" />
                    <p>Parties</p>
                </div>
                <div class="category-item">
                    <img src={wedding} alt="Decorations" />
                    <p>Weddings</p>
                </div>
                <div class="category-item">
                    <img src={engagement} alt="Electronics" />
                    <p>Engagements</p>
                </div>
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
    </div>
  )
}

export default Category
