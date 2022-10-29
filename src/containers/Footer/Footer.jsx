import React, {useState} from 'react'

import{images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'
import {client} from '../../client'
import './Footer.scss'
const Footer = () => {

  const [formData, setformData] = useState({name:'', email:'', message:''});

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const [loading, setLoading] = useState(false);

  const { name, email, message} =formData;

  const handleChangeInput = (e)=> {
    const{ name, value} = e.target
    setformData({...formData,[name]: value})
  }

  const handleSubmit =()=>{
    setLoading(true);

    const contact= {
      _type: 'contact',
      name,
      email,
      message,
    }
    client.create(contact).then(()=>{
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className='head-text'> Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt='email' />
          {/* --> edit your details accordingly */}
          <a href="mailto: krishfredrick07@gmail.com" className='p-text'> krishfredrick07@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt='mobile' />
          {/* --> edit your details accordingly */}
          <a href="tel: +(91) 8072860236" className='p-text'> +(91) 8072860236</a>
        </div>
      </div>
      {!isFormSubmitted ? //--> if is happening
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className="p-text" placeholder='Your Name' value={name} onChange={handleChangeInput}
          name='name' />
        </div>
        <div className="app__flex">
          <input type="email" className="p-text" placeholder='Email' value={email} onChange={handleChangeInput}
          name='email' />
        </div>
        <div>
          <textarea
           name='message'
           placeholder='Your Message'
           value={message}
           onChange={handleChangeInput}
          ></textarea>
        </div>

        <button
          type='button' 
          className='p-text'
          onClick={handleSubmit}
          >
          {loading? 'Sending':'Send Message'}
        </button>
      </div>
      :  //---> Else is happening
      <div>
        <h3 className='head-text'> Thank you for getting in Touch!</h3>
      </div>
      }

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer,'app__footer'),
  'contact',
  'app_whitebg'
)