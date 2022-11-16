import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Footer = () => {  
    const form = useRef<any>();
    const sendEmail = (e:any) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'gmail',
                '',
                form.current,
                ''
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload()
                },
                () => {
                    alert('Faild to send the massage, please try again!')
                }
            )
    }

    return (
        <section className="footer">            
            <form ref={form} onSubmit={sendEmail}>
                <p className='works__title contact'>Contact me</p>  
                <input type="email" name="email" placeholder='Email*'/>
                <input type="text" name="subject"  placeholder='Subject'/>
                <textarea name="message"  placeholder='Message*' required />
                <input className="sendButton" type="submit" value="SEND"/>
            </form> 
        </section>
    )
}

export default Footer

