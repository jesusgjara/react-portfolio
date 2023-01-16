import React from 'react'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RxTwitterLogo} from 'react-icons/rx'
import {BsWhatsapp} from 'react-icons/bs'

function Contact() {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('web-portfolio', 'template_auf98nl', form.current, 'JBknY59rNDNtIJxFx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jesusgjara@gmail.com</h5>
            <a href="mailto:jesusgjara@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RxTwitterLogo className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@gsuscodes</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=1045834767441285120" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Phone number</h5>
            <a href="https://wa.me/584129107710" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact