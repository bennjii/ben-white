import { GitHub, Linkedin } from "react-feather";

const Footer = () => {
    return (
        <footer>
            <div>
                <h6>BEN WHITE &rarr; {new Date().getFullYear()}</h6>
                <a href="https://github.com/UnRealReincarlution"><GitHub size={16}/></a>
                <a href="https://www.linkedin.com/in/ben-white-030a1b204/"><Linkedin size={16}/></a>
            </div>
            
            <h6>AUCKLAND, NEW ZEALAND</h6>
        </footer>
    )
}

export default Footer;