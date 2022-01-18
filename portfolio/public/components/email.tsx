import { Check, Copy, GitHub, Linkedin, Mail } from "react-feather";
import styles from '@styles/Home.module.css'
import { useRef, useState } from "react";

const Email = () => {
    const [ active, setActive ] = useState(false);
    const [ coppied, setCoppied ] = useState(false);

    const input_ref = useRef<HTMLInputElement>(null);

    return (
        <section className={styles.contact}>
            <p>You can reach me through email, </p>
            <input type="text" readOnly defaultValue="benwhite2413@gmail.com" ref={input_ref} style={{ visibility: 'hidden' }} />

            <div className={styles.emailComponent} onMouseOver={() => setActive(true)} onMouseLeave={() => { setActive(false); setCoppied(false) }} onClick={() => {
                input_ref.current.select();
                input_ref.current.setSelectionRange(0, 99999);
              
                navigator.clipboard.writeText(input_ref.current.value);
                setCoppied(true);
            }}>
                <div>
                    {
                        active ? 
                            coppied ?
                            <Check color={"#f4f4f4"} strokeWidth={1} />
                            :
                            <Copy color={"#f4f4f4"} strokeWidth={1} />
                        :
                        <Mail color={"#f4f4f4"} strokeWidth={1} />
                    }
                </div>
                
                <p>
                    { coppied ? "Coppied               " : "benwhite2413@gmail.com" }
                </p>					
            </div>
        </section>
    )
}

export default Email;