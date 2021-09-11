
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head'
import { skipPartiallyEmittedExpressions } from 'typescript';
import styles from '@styles/Home.module.css'

import { ArrowDown, ArrowRight, GitHub, Menu } from 'react-feather'
import ScrollReminder from '@public/components/scroll_reminder';
import Button from '@public/components/button';

import Image from 'next/image'

import authenticationImage from '@public/img/learning-authentication.png'
import codespaceImage from '@public/img/learning-codespace.png'
import homespaceImage from '@public/img/learning-homespace.png'
import Header from '@components/header';

export const Home: React.FC<{ data: any }> = ({ data }) => {
    return (
        <div className={styles.page}>
			<Header />

			<div className={styles.learnToCodeDedicated}>
                <h2>teaching the next <br />generation</h2>
                
                <div className={styles.titleInformation}>
                    <p>learn to code</p>
                    <Button title={""} href={"https://github.com/UnRealReincarlution/learn-to-code"} icon={<GitHub size={16} color={"#f4f4f4"} />} />

                    <p className={styles.pinItem}>2020</p>
                    <Button title={"live preview"} href={"https://learn-to-code-orpin.vercel.app/"}  /> {/* style={{ justifySelf: 'flex-end' }} */}
                </div>
                
                <div className={styles.caseStudyContent}>
                    <p>
                        Learn to code was a project developed as a part of my IB Diploma&apos;s CAS process. 
                        Wherein, in the effort to help others and learn more about different areas of programming development, I made Learn to code.

                        Learn to code serves as both a teaching tool for others, and myself. I made the project keeping in mind the areas of programming I find i&apos;m weak in, and that i&apos;d like to improve in.
                    </p>

                    <p>
                        There were a few aspects I needed to consider before engaging in creating the project, those being - the intended audiance, and hence how the lessons would be structured and the dificulties of each. 
                        The design style, such that the design is cohesive and coherent.
                    </p>

                    {/* <Image src={codespaceImage} alt="Authentication" /> */}

                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home