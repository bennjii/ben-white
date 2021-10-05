import { Copy, GitHub, Linkedin, Mail } from "react-feather";
import styles from '@styles/Home.module.css'
import { useState } from "react";

const Email = () => {
    const [ active, setActive ] = useState(false);

    return (
        <section className={styles.contact}>
            <p>You can reach me through email, </p>

            <div className={styles.emailComponent} onMouseOver={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                <div>
                    {
                        active ? 
                        <Copy color={"#f4f4f4"} strokeWidth={1} />
                        :
                        <Mail color={"#f4f4f4"} strokeWidth={1} />
                    }
                </div>
                
                <p>benwhite2413@gmail.com</p>					
            </div>
        </section>
    )
}

export default Email;