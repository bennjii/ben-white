
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
                <h2>A New Era of Writing</h2>
                
                <div className={styles.titleInformation}>
                    <div>
                        <p>transcribe</p>
                        <Button title={""} href={"https://github.com/UnRealReincarlution/transcribe"} icon={<GitHub size={16} color={"#070707"} style={{ marginBottom: '-3px' }}/>} />

                        <p className={styles.pinItem}>May 2021</p>
                    </div>
                    
                    <Button title={"live preview"} href={"https://transcribe.vercel.app/"}  /> {/* style={{ justifySelf: 'flex-end' }} */}
                </div>
                
                <div className={styles.caseStudyContent}>
                    <p>
                        When deciding upon my next endevour, I was frustrated with the performance issues with text editors when editing large files such as a book, publication or paper.
                        This makes developing and writing incredibly dificult. In order to combat this, I decided to make my own.
                    </p>

                    <p>
                        Introducing transcribe, the application that allows users to write complex files with ease, allowing for multiple documents in a project for a more refined workflow.
                        <br /><br />
                        This meaning - users have the ability to organise ideas, lay out where and when they want things to happen. And with the only beta introduced visionboard allows them to further develop thier ideas without the need for a pen or paper.
                    </p>

                    <p>
                        Transcribe is a free piece of software that breaks a project into smaller chunks. Allowing for project management through a folder based design structure, and a built in book feature which allows a plain document to be automatically split into and dealt with in chapters.
                        This both increases performance, decreases the need for needless navigation and improves workflow. The design is intended to be minimalistic but also inspiring for it is exactly what an overworked author needs.
                    </p>

                    <p>
                        We took design ideas from the best, asking our favourite authors what softwares they used, what were the shortcommings and what they wished was improved...
                    </p>

                    {/* <Image src={codespaceImage} alt="Authentication" /> */}

                    <div className={styles.spacerScreen}>
                        <h4>WHY NOT MOVE FORWARD?</h4>
                        <h3>Why?</h3>
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