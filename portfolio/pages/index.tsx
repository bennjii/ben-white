
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head'
import { skipPartiallyEmittedExpressions } from 'typescript';
import styles from '@styles/Home.module.css'

import { ArrowDown, ArrowRight, Menu } from 'react-feather'
import ScrollReminder from '@public/components/scroll_reminder';
import Button from '@public/components/button';
import Header from '@components/header';

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
			<Header />

			<ScrollReminder />

			<section className={styles.primarySection}>
				<h1>ben white</h1>
				<p>typescript, react, nodejs, c++</p>
			</section>

			<section className={styles.learnToCode}>
				{/* <div className={styles.sectionTitle}><h4>ONE</h4></div> */}
				<h1>learn to code</h1>
				<p>free program for others to use to learn how to code</p>
				<br /><br />
				<Button title={"case study"} href="./study/learn-to-code"></Button>
			</section>
        </div>
    )
}

export default Home