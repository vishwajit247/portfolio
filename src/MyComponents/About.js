import React from 'react'
import "./about.css"
import Myself2 from "../img/Myself2.jpg"

export const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          I am a tech-savvy person, In my two year of
          college life, I tried to gain hands on experience
          on HTML, CSS, other tools and languages.
          Right now, I am focussing on diving deeper into
          Java Script and planning to build unique and
          user-friendly websites that will help the society.
        </p>
        <p className='a-desc'>
          I am a Final Year B.Tech IT student of Netaji Subhash
          Engineering College, living in Kolkata right
          now and comfortable in working remotely
          as well as regular office internships.
        </p>
      </div>
      <div className="a-right">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Myself2} alt="" className='a-img' />
        </div>
      </div>
    </div>
  )
}
