
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
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Footer from '@components/footer';

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
				<div className={styles.h2Roller}>
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
				{/* style={{ background: "linear-gradient(180deg,#ffd2e6,#b4d7ff)" }} */}
				<div className={styles.project}>
					<div className={styles.h2Roller}>
						<h2>01</h2>
						<hr />
						<h2>LEARN TO CODE</h2>
					</div>

					<div>
						<h1>learn to code</h1>
						<p>teaching others how to code</p>
						<Button title={"case study"} href="./study/learn-to-code"></Button>
					</div>
				</div>

				<div className={styles.project} >
					<div className={styles.h2Roller}>
						<h2>02</h2>
						<hr />
						<h2>TRANSCRIBE</h2>
					</div>

					<div>
						<h1>transcribe</h1>
						<p>fast & performant text editor</p>
						<Button title={"case study"} href="./study/transcribe"></Button>
					</div>
				</div>

				<div className={styles.project} >
					<div className={styles.h2Roller}>
						<h2>03</h2>
						<hr />
						<h2>FORTITUDE</h2>
					</div>

					<div>
						<h1>fortitude</h1>
						<p>advanced discord clone</p>
						<Button title={"case study"} href="https://github.com/UnRealReincarlution/fortitude"></Button>
					</div>
				</div>

				<div className={styles.project} >
					<div className={styles.h2Roller}>
						<h2>04</h2>
						<hr />
						<h2>DAILY</h2>
					</div>

					<div>
						<h1>daily</h1>
						<p>customisable new-tab chrome extention</p>
						<Button title={"github"} href="https://github.com/UnRealReincarlution/daily"></Button>
					</div>
				</div>

				<div className={styles.project} >
					<div className={styles.h2Roller}>
						<h2>05</h2>
						<hr />
						<h2>MACHINE LEARNING</h2>
					</div>

					<div>
						<h1>HPP</h1>
						<p>predicting house prices</p>
						<Button title={"case study"} href="https://docs.google.com/document/d/1VN26wH46sXJei4uEulj11jcmNTLf8IWalg10tqIFjio/edit?usp=sharing"></Button>
					</div>
				</div>
			</section> 

			<div className={styles.sectionTitle}>
				<h1>Contact</h1>
			</div>
			
			<Footer />
        </div>
    )
}

export default Home