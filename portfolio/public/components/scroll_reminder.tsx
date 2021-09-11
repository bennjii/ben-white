import styles from '@styles/Home.module.css'
import { ArrowDown } from 'react-feather'
import { useEffect, useState } from 'react';

export const ScrollReminder: React.FC<{}> = ({ }) => {
    const [ reminder, setReminder ] = useState(process.browser ? window?.scrollY : 0);

    useEffect(() => {
        setReminder(window?.scrollY)
    }, []);

    return process.browser ? 
        (
            reminder < 15 ? 
            <div className={styles.scrollReminder}>
                <div>
                    SCROLL
                    <ArrowDown size={16}></ArrowDown>
                </div>
            </div>
            :
            null
        ) : null
}

export default ScrollReminder