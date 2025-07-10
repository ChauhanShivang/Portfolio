import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img-2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>

            <img src={profile_img} className='profile-img' alt="" />

            <h1><span>Hi, I'm Shivang 👋</span> <br /> A Computer Engineering Student passionate about Full Stack Development.</h1>
            <p>
                I'm a 4th-year Computer Engineering student with a knack for building efficient, scalable, and user-friendly applications. I've worked across the stack — from developing REST APIs Node.js to crafting responsive UIs in React.
            </p>
            <div className='hero-action'>
                <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className='hero-resume'><a className='resume' href="/Resume.pdf" target='_blank' rel='noopener noreferrer'>My Resume</a></div>
            </div>

        </div>
    )
}

export default Hero
