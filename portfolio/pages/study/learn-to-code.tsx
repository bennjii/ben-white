
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
import Footer from '@components/footer';

export const Home: React.FC<{ data: any }> = ({ data }) => {
    return (
        <div className={styles.dedicated}>
			<Header />

			<div className={styles.learnToCodeDedicated}>
                <h2>Teaching the Next Generation</h2>
                
                <div className={styles.titleInformation}>
                    <div>
                        <p>learn to code</p>
                        <Button title={""} href={"https://github.com/UnRealReincarlution/learn-to-code"} icon={<GitHub size={16} color={"#070707"} style={{ marginBottom: '-3px' }}/>} />

                        <p className={styles.pinItem}>FEB 2021</p>
                    </div>
                    
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

                    <div className={styles.spacerScreen}>
                        <h4>TEACHING OUR YOUTH</h4>
                        <h3>Many education systems in our modern society fail to teach students how to operate in a digital era.</h3>
                    </div>

                    <p>
                        Many school systems fail to actively encourage and participate in teaching and educating our youth in our digital age. Where, many are left uncertain such as in digital cyber security with the rise of internet scams, ensuring they are educated in what is right, what is truethful should be a top priority. 
                    </p>

                    <p>
                        As a result, i find countless people uncertain about what they can or cannot do - allways uncertain about the true power of what a computer can do. Leaving them unsafe and exposed. Although this project may not solve the root cause - I aimed to improve our way of teaching youth. For those that are interested, they are able to use the website to learn how computers work. Starting with languages such as python or javascript for the more common and frequent web intereactions and moving towards lower level languages such as c++ where they may begin to find out just how powerful thier computer really is, hopefully encouraged to create something new or do something great. 
                    </p>

                    <p>
                        I present, Learn to Code. Although the project was intended as a learning experience for myself, I find it has large potential value for the future of our society in both practice and in idea.
                    </p>

                    <div className={styles.spacerScreen}>
                        <h4>View Project</h4>
                        <Button title={"live preview"} href={"https://learn-to-code-orpin.vercel.app/"} icon={<ArrowRight size={26} strokeWidth={1}></ArrowRight>} /> {/* style={{ justifySelf: 'flex-end' }} */}
                    </div>

                    <p style={{ fontFamily: 'DM Serif', fontSize: '1rem' }}>cheers,</p>

                    <div className={styles.signature}>
                        Ben White

                        {/* <p>N</p> */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home