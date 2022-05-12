import React from 'react'
import "./skills.css"
import { Skill } from "./Skill"
import { products } from './data'

export const Skills = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className='pl-title'>My Skills</h1>
        <p className='pl-desc'>
          I like to code things and
          enjoy bringing ideas in the browser.
        </p>
        <div className="pl-list">
          {products.map((item) => (
            <Skill key={item.id} img={item.img} />
          ))}

        </div>
      </div>
    </div>
  )
}
