import React from 'react'
import "./home.css"
import Myself from "../img/Myself.png"
import Address from "../img/address.jpg"

export const Home = () => {
    let location = {
        fontWeight: "bold",
        color: "gray"
    }
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-bg'></div>
                <img src={Myself} alt="" className='i-img' />
            </div>
            <div className='i-right'>
                <div className="i-right-wrapper">
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>Vishwajit Khanna</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>HTML, CSS, JavaScript</div>
                            <div className='i-title-item'>React Developer</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                        <h2 className='i-intro' style={location}><img src={Address} alt="" className="c-icon"/>Kolkata, India</h2>
                        Frontend Developer with proficiency in React JS and
                        excellent problem-solving skills, specalizing in
                        creating stylish, modern websites.
                    </p>
                </div>
            </div>
        </div>
    )
}
