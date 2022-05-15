import styles from '@styles/Home.module.css'
import { ArrowRight, Menu } from 'react-feather'
import { useEffect, useState } from 'react';
import Button from './button';

export const Header: React.FC<{ }> = ({ }) => {

    return (
        <div className={styles.header}>
            <div>
                <a href="../">ben white</a>
            </div>

            <title>Ben White</title>

            {/* {
                headerOpen ? 
                <div className={styles.headerLong}>
                    <div>
                        <h2>LINKS</h2>
                        <Button title="home" href={`http://${window?.location?.host}`} theme></Button>
                        <Button title="github" href="https://github.com/bennjii" theme></Button>
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
            } */}
            
        </div>
    )
}

export default Header