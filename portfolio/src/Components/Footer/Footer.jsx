import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo-2.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I’m a full stack developer from India with hands-on experience in building scalable web applications using the MERN stack.</p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>

        <hr />

        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Shivang Chauhan. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer
