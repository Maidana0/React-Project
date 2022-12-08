import {  AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

export const Footer = ()=>{
    return (
    <footer>
      <div className="footer-contact">
        <AiOutlineInstagram  size='2em'/>
        <AiOutlineWhatsApp size='2em'/>
        <AiOutlineMail size='2em'/>
      </div>
      <a href='https://www.instagram.com/franco_maidana07/' target='_blank'>© Maidana 2022 </a>
    </footer>
    )
}

export default Footer