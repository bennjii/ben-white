
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head'
import { skipPartiallyEmittedExpressions } from 'typescript';
import styles from '@styles/Home.module.css'

import { ArrowDown, ArrowRight, GitHub, Linkedin, Menu } from 'react-feather'
import ScrollReminder from '@public/components/scroll_reminder';
import Button from '@public/components/button';
import Header from '@components/header';

import codespaceImage from '@public/img/learning-codespace.png'
import Image from 'next/image'

// In case I change my username in the future :')
const CURRENT_USERNAME = "UnRealReincarlution";

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json())

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
  ) => {
	const data = await fetcher(`https://api.github.com/users/${CURRENT_USERNAME}/repos`, '');

    return {
        props: {
            data
        }
    }
}
/**
 * Home, Features the main projects at any one time. Taken from, github through the API and displayed in a custom viewport that intereperates .MD files
 * The Main projects shall include:
 * -	Learn To Code
 * -	transcribe
 * -	Daily
 * -	fortitude
 * -	scholarship
 * 
 * Showing design skills, appropriateness of design, where and how different features are used and integrated, consideration of users, unique coding and development skills used, etc.
 * 
 * @returns React Page.
 */

export const Home: React.FC<{ data: any }> = ({ data }) => {

    return (
        <div className={styles.page}>
			{/* <Header /> */}

			<section className={styles.primarySection}>
				<div>
					<h2>Hi there 👋</h2>
					<hr />
					<h2>I{"'"}m Ben White</h2>
				</div>

				<h1>
					I{"'"}m a Student,
					<br />
					Developer & Designer
					<sub>NZ</sub>
				</h1>
				
				<p>I am a full stack web developer from New Zealand</p>

				<div>
					<ScrollReminder />
				</div>
			</section>

			<div className={styles.sectionTitle}>
				<h1>Case Studies <br/>& Projects </h1>
			</div>

			
			<section className={styles.projectList}>
				<div className={`${styles.project}`}>
					<Image src={codespaceImage} alt={""} quality={100}/>
					<h1>learn to code</h1>
					<p>free program for others to use to learn how to code</p>
					<Button title={"case study"} href="./study/learn-to-code"></Button>
				</div>

				<div className={`${styles.project}`}>
					<Image src={codespaceImage} alt={""} />
					<h1>learn to code</h1>
					<p>free program for others to use to learn how to code</p>
					<Button title={"case study"} href="./study/learn-to-code"></Button>
				</div>

				<div className={`${styles.project}`}>
					<Image src={codespaceImage} alt={""} />
					<h1>learn to code</h1>
					<p>free program for others to use to learn how to code</p>
					<Button title={"case study"} href="./study/learn-to-code"></Button>
				</div>
			</section> 
			
			<footer>
				<div>
					<h2>BEN WHITE &copy; {new Date().getFullYear()}</h2>
					<a href="https://github.com/UnRealReincarlution"><GitHub size={16}/></a>
					<a href="https://www.linkedin.com/in/ben-white-030a1b204/"><Linkedin size={16}/></a>
				</div>
				
				<h2>AUCKLAND, NEW ZEALAND</h2>
			</footer>
        </div>
    )
}

export default Home