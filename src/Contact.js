import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <p>Send me a message</p>
      <form className='form' >
        <div className='name'><input type="text" placeholder='Name' /></div>
        <div className='email'> <input type="email" placeholder='Email' /></div>
        <div className='info'><textarea name="info" id="info" cols="30" rows="10" placeholder='Message'></textarea></div>
        <div className='button'><button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact