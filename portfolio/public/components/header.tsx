import styles from '@styles/Home.module.css'
import { ArrowRight, Menu } from 'react-feather'
import { useEffect, useState } from 'react';
import Button from './button';

export const Header: React.FC<{ }> = ({ }) => {
    const [ headerOpen, setHeaderOpen ] = useState(false);

    return (
        <div className={styles.header}>
            <div>
                <p>ben white</p>
                <Menu color={headerOpen ? "#0B0C11" : "#f4f4f4"} onClick={() => setHeaderOpen(!headerOpen)}></Menu>
            </div>

            {
                headerOpen ? 
                <div className={styles.headerLong}>
                    <div>
                        <h2>LINKS</h2>
                        <Button title="home" href={window?.location?.hostname} theme></Button>
                        <Button title="github" href="https://github.com/UnRealReincarlution" theme></Button>
                        <Button title="linkedin" href="https://www.linkedin.com/in/ben-white-030a1b204/" theme></Button>

                        <h2>CASE STUDIES</h2>
                        <Button title="learn to code" href="../" theme></Button>
                        <Button title="transcribe" href="../" theme></Button>
                        <Button title="fortitude" href="../" theme></Button>
                        <Button title="nzqa scholarship" href="../" theme></Button>
                    </div>
                </div>
                :
                <></>
            }
            
        </div>
    )
}

export default Header