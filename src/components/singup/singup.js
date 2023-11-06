import React from 'react'
import './singup.css'

const Singup = () => {
  return (
    <div>
      <section id='ko'>
        <div className='register-box'>
          <div className='form-value'>
            <form action=''>
              <h2>Sing Up</h2>
              <div className='inputbox'>
              
                <input type='text' required />
          
                <label for='' >First Name</label>
              </div>
              <div className='inputbox'>
              
                <input type='text' required />
          
                <label for='' >Last Name</label>
              </div>
              <div className='inputbox'>
              <i class="fa-solid fa-envelope"></i>
                <input type='email' required />
          
                <label for='' >Email</label>
              </div>
              <div className='inputbox'>
              <i class="fa-solid fa-lock"></i>
                <input type='password' required />
               
                <label for='' >Password</label>
              </div>
              <div className='inputbox'>
              <i class="fa-solid fa-lock"></i>
                <input type='password' required />
               
                <label for='' > Confirme Password</label>
              </div>
              
              <button>Sing Up</button>
      
            </form>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Singup