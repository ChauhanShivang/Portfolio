import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img-3.jpg'

const About = () => {
    return (
        <div id='about' className='about'>

            <div className='about-title'>
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className='about-sections'>

                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>

                <div className="about-right">

                    <div className="about-para">
                        <p>I'm a final-year Computer Engineering student with a strong passion for building efficient, scalable, and user-centric software applications. Over the years, I've gained hands-on experience across the full stack — from designing and developing RESTful APIs using Node.js and Express, to building clean, interactive front-end interfaces with React and modern JavaScript.</p>
                        <p>I enjoy tackling complex problems, optimizing backend performance, and delivering smooth, responsive UI experiences. Developing secure APIs with JWT, I strive to write clean, maintainable code that solves real-world problems. I'm always curious, constantly learning, and love bringing ideas to life through tech.</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>MERN Stack</p> <hr style={{ width: "75%" }} /></div>
                        <div className="about-skill"><p>DSA</p> <hr style={{ width: "60%" }} /></div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default About
