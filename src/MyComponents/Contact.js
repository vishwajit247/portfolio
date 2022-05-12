import React from "react"
import "./contact.css"
import Phone from "../img/phone.jpg"
import Email from "../img/email.jpg"
import Address from "../img/address.jpg"

export const Contact = () => {

  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className='c-title'>Interested in doing a project together?</h1>
          <p className="c-desc">
            <b>Let's discuss your project!! </b>
            Always available for freelancing.
            <p>Get in touch for doing projects together.</p>
          </p>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src={Phone} alt="" className="c-icon" />
              <a className="c-icon-style" href="tel:+918340583019">
                8340583019</a>
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              <a className="c-icon-style" href="mailto:vishwajitkhanna247@gmail.com">
                vishwajitkhanna247@gmail.com</a>
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Netaji Subhash Engineering College, Kolkata
            </div>
          </div>
        </div>
        <div className="c-right">

          <div className="c-right-desc">I am interested in Internship and Freelance opportunities.
            Feel free to conatct me or you can simply text me using the chat button given below.</div>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7464729499543!2d88.41274391479016!3d22.476159585232445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1619777657365!5m2!1sen!2sin" allowfullscreen="" className="map-desc"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
