import React from 'react'
import '../../css/ServiceProvider.css'
import SPNavbar from '../../components/SPNavbar'

import proicon from '../../images/proicon.png'

function ServiceProvider() {
  return (
    <div>
      <SPNavbar/>
      <div className='main-content'>
      <div class="services-container">
                <h2>Service Providers Registration</h2>
                <div class="services">
                    <div class="service-provider-details">
                        <h3>General Information</h3>
                        <img src={proicon} />
                        <p>Select your service category</p>
                        <select class="category-checkbox" aria-placeholder="Select your service category">
                            <option value="">Photographer</option>
                            <option value="">Entertainment</option>
                            <option value="">Catering</option>
                            <option value="">Locations</option>
                            <option value="">Vehicles</option>
                            <option value="">Decorations</option>
                            <option value="">Electronics</option>
                            <option value="">Other</option>
                        </select>
                        <p>Enter your name/Company name</p>
                        <input type="text" class="name1" placeholder="Enter your name/Company name"/>
                        <p>Enter the email address</p>
                        <input type="email" class="email" placeholder="Enter the email address"/>
                        <p>Enter your phone number</p>
                        <input type="text" class="phone" placeholder="Enter your phone number"/>
                        <p>Input a header image</p>
                        <input type="file" class="header-image"/>
                    </div>
                    <div class="packages">
                        <div class="packages-header1">
                            <div>
                                <h3>Packages</h3>
                            </div>
                            <div class="add-new-button">
                                <button class="addnew-button">+ Add new Package</button>
                            </div>
                        </div>
                        <div class="package-details">
                            <p>Package name</p>
                            <input type="text" class="package-name" placeholder="Package name"/>
                            <p>Description</p>
                            <textarea class="descriptionP" placeholder="Description"></textarea>
                            <p>Package Type</p>
                            <select class="package-type" aria-placeholder="Select package type">
                                <option value="">Basic</option>
                                <option value="">Standard</option>
                                <option value="">Premium</option>
                            </select>
                            <p>Price range</p>
                            <input type="text" class="price-range" placeholder="Price range"/>
                            <p>Duration</p>
                            <input type="text" class="duration" placeholder="Duration"/>
                            <p>Inclusions</p>
                            <textarea class="inclusions" placeholder="Inclusions"></textarea>
                            <p>Upload package images</p>
                            <input type="file" class="package-images" multiple/>  
                            <div class="packagesB">
                                <button class="cancel-button1">Cancel</button>
                                <button class="save-button1">Save</button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div>
    
                </div>
            </div>
      </div>
    </div>
  )
}

export default ServiceProvider
