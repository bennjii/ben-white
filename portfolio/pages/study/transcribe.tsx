
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head'
import { skipPartiallyEmittedExpressions } from 'typescript';
import styles from '@styles/Home.module.css'

import { ArrowDown, ArrowRight, GitHub, Menu } from 'react-feather'
import ScrollReminder from '@public/components/scroll_reminder';
import Button from '@public/components/button';

import Image from 'next/image'

import signature from '@public/img/signature_2.png'
import Header from '@components/header';
import Footer from '@components/footer';
import Signature from '@components/signature';

export const Home: React.FC<{ data: any }> = ({ data }) => {
    return (
        <div className={styles.dedicated}>
			<Header />

			<div className={styles.learnToCodeDedicated}>
                <h2>A New Era of Writing</h2>
                
                <div className={styles.titleInformation}>
                    <div>
                        <p>transcribe</p>
                        <Button title={""} href={"https://github.com/UnRealReincarlution/transcribe"} icon={<GitHub size={16} color={"#fff"} style={{ marginBottom: '-3px' }}/>} />

                        <p className={styles.pinItem}>May 2021</p>
                    </div>
                    
                    <Button title={"live preview"} href={"https://transcribe.vercel.app/"}  /> {/* style={{ justifySelf: 'flex-end' }} */}
                </div>
                
                <div className={styles.caseStudyContent}>
                    <p>
                        When deciding upon my next endeavour, I was frustrated with the performance issues with text editors when editing large files such as a book, publication or paper.
                        This makes developing and writing incredibly difficult. In order to combat this, I decided to make my own.
                    </p>

                    <p>
                        Introducing transcribe, the application that allows users to write complex files with ease, allowing for multiple documents in a project for a more refined workflow.
                        <br /><br />
                        This meaning - users have the ability to organize ideas, lay out where and when they want things to happen. And with the only beta introduced visionboard allows them to further develop their ideas without the need for a pen or paper.
                    </p>

                    <p>
                        Transcribe is a free piece of software that breaks a project into smaller chunks. Allowing for project management through a folder based design structure, and a built in book feature which allows a plain document to be automatically split into and dealt with in chapters.
                        This both increases performance, decreases the need for needless navigation and improves workflow. The design is intended to be minimalistic but also inspiring for it is exactly what an overworked author needs.
                    </p>

                    <p>
                        We took design ideas from the best, asking our favorite authors what softwares they used, what were the shortcomings and what they wished was improved...
                    </p>

                    <div className={styles.spacerScreen}>
                        <h4>OUT WITH THE OLD, IN WITH THE NEW</h4>
                        <h3>Lets move forward!</h3>
                    </div>

                    <p>
                        So, we asked ourselves how can we improve with what we now know - and so we did. Releasing transcribe as a free, high performing website that anyone can use. Although many of the features we initially wished to implement may be delayed, the software is still in of itself complete.                        
                    </p>

                    <p>
                        As such - by all means, enjoy the software and have fun being creative and adventurous with what you do. Onwards an upwards.
                    </p>

                    <div className={styles.spacerScreen}>
                        <h4>View Project</h4>
                        <Button title={"live preview"} href={"https://learn-to-code-orpin.vercel.app/"} icon={<ArrowRight size={26} strokeWidth={1}></ArrowRight>} /> {/* style={{ justifySelf: 'flex-end' }} */}
                    </div>

                    <p style={{ fontFamily: 'DM Serif', fontSize: '1rem' }}>cheers,</p>

                    <Signature />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home