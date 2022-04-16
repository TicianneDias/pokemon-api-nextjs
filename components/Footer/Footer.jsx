import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FooterSite } from './style'

const Footer = () => {
    return ( 
        <>
        <FooterSite>
            <p>&copy; Copyright 2022 Ticianne Dias <a href="https://www.linkedin.com/in/ticianne-dias-a7a66b134/" target="_blank" rel="noreferrer"><BsLinkedin /></a><a href="https://github.com/TicianneDias" target="_blank" rel="noreferrer"><BsGithub /></a></p>
            <p> Made with Next.js </p>
        </FooterSite>
        </>
               
     );
}
 
export default Footer;