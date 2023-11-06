import React from 'react'
import './mailList.css'

export const MailList = () => {
  return (
    <div className='mail'>
       <h1 className='mailTittle'>Save time, Save money!</h1>
       <span className='mailDesc'>Sign up and we'll send the best deals to you</span>
        <div className='mailInputContainer'>
            <input type='text' placeholder='Your Email' />
            <button className='btn'>Subscribe</button>
        </div>
        
    </div>
  )
}

export default MailList;