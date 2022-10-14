import { GitHub, Linkedin, Link, ArrowUpRight } from "react-feather";
import styles from '@styles/Home.module.css'


const Footer = () => {
    return (
        <div className="flex flex-row items-center justify-between">
            <h6 className="text-slate-600 font-bold">bennjii - {new Date().getFullYear()}</h6>
            {/* <p className="flex flex-row items-center gap-1" style={{ fontSize: '0.8rem' }}>Inspired by <a className="flex flex-row items-center gap-1" href="https://alistair.sh/">Alistair  <ArrowUpRight size={12}/></a></p> */}
        </div>
    )
}

export default Footer;