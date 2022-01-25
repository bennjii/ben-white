import { GitHub, Linkedin, Link, ArrowUpRight } from "react-feather";
import styles from '@styles/Home.module.css'


const Footer = () => {
    return (
        <footer className={styles.refFooter}>
            <div>
                <h6>BEN WHITE &rarr; {new Date().getFullYear()}</h6>
                <p style={{ fontSize: '0.8rem' }}>Inspired by <a href="">Alistair  <ArrowUpRight size={12}/></a></p> 
            </div>
            
            <h6>AUCKLAND, NEW ZEALAND</h6>
        </footer>
    )
}

export default Footer;