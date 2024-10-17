import React from 'react'
import Navbar from '../../components/Navbar'
import '../../css/Account.css'
import proicon3 from '../../images/proicon3.png'

function Account() {
  return (
    <div>
      <Navbar/>
      <div className='main-content'>
      <div class="account-settings-page">
        <div class="basicP-info">
            <h2 class="account-settingsH2">User Profile</h2>
            <div class="profile-settings-upper">
                <h3 class="profileH3">Account Info</h3>
                <div class="profile-settings-upper-div">
                    <div class="profile-settings-upper-divProfile">
                        <div class="profile-settings-username">
                            <p>Username</p>
                            <input class="accountS-username acoountS-usename-input"type="text"  placeholder="Username"/>
                        </div>
                        <div class="profile-settings-description">
                            <p>Description</p>
                            <textarea class="accountS-description-textarea" placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div class="profile-settings-image">
                        <img class="profile-settings-image-image" src={proicon3}/>
                        <button class="accountS-upload-button">Upload</button>
                    </div> 
                </div>
                <button class="accountS-saveChanges-button">Save changes</button>
            </div>
            <div class="AccountS-other-settings">
                <div class="security-settings-lower-div">
                    <div class="accountS-otherS">
                        <h3 class="securityH3">Personal Info</h3>
                        <div class="security-settings-email">
                            <p>Email</p>
                            <input class="accountS-email acoountS-email-input" type="text"  placeholder="Email"/>
                        </div>
                        <div class="security-settings-phone">
                            <p>Phone</p>
                            <input class="accountS-phone acoountS-phone-input" type="text"  placeholder="Phone"/>
                        </div>
                        <div class="security-settings-title">
                            <p>Title</p>
                            <input class="accountS-title" type="text" placeholder="Title"/>
                        </div>
                        <button class="otheraccountS-saveChanges-button">Save changes</button>
                    </div>
                    <div class="security-settings-lower">
                        <h3 class="securityH3">Security Info</h3>
                        <div class="security-settings-password-change">
                            <p>Change Password</p>
                            <input class="accountS-old-password acoountS-old-password-input" type="password"  placeholder="Old Password"/>
                        </div>
                        <div class="security-settings-password">
                            <p>Password</p>
                            <input class="accountS-password acoountS-password-input" type="password"  placeholder="Password"/>
                        </div>
                        <div class="security-settings-password-confirm">
                            <p>Confirm Password</p>
                            <input class="accountS-confirm-password acoountS-confirm-password-input" type="password"  placeholder="Confirm Password"/>
                        </div>
                        <button class="securityS-saveChanges-button">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

      </div>
    </div>
  )
}

export default Account
