import React from 'react'
import "./skill.css"

export const Skill = ({img}) => {
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href='' target="_blank" rel="noreferrer">
               <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}
