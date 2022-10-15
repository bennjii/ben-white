import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from 'next';
import Head from 'next/head'
import { skipPartiallyEmittedExpressions } from 'typescript';
import styles from '@styles/Home.module.css'

import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import {
	SiAdobephotoshop,
	SiArduino,
	SiBabel,
	SiCplusplus,
	SiDebian,
	SiDocker,
	SiGit,
	SiGithub,
	SiGo,
	SiJupyter,
	SiLinkedin,
	SiLinux,
	SiNextdotjs as SiNextDotJs,
	SiNodedotjs as SiNodeDotJs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRust,
	SiTensorflow,
	SiTypescript,
	SiWebpack,
	SiWireguard,
	SiYarn
} from 'react-icons/si';

import { RiBookFill } from 'react-icons/ri'

import { titleControl, titleVariants } from '@components/framer_constants';

import { motion } from "framer-motion"

// In case I change my username in the future :')
const CURRENT_USERNAME = "bennjii";
import "animate.css/animate.min.css";
import Footer from '@components/footer';
import Email from '@components/email';
import { PinnedRepo, } from '@components/github';
import { ProjectCard } from '@components/project_card';
import { ListItem } from '@components/list_item';
import useMediaQuery from "@components/media_query";
import ScrollReminder from "@components/scroll_reminder";
import {PresenceCard} from "@components/presence_card";

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json())

type Props = {
	pinnedRepos: PinnedRepo[]
}

export const getStaticProps: GetStaticProps<Props> = async function () {
	const httpLink = createHttpLink({
		uri: 'https://api.github.com/graphql',
	  });
	  
	const authLink = setContext((_, { headers }) => {
	return {
		headers: {
		...headers,
		authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
		}
	}
	});
	
	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache()
	});

	const { data } = await client.query({
		query: gql`{
			user(login: "bennjii") {
			  pinnedItems(first: 6) {
				totalCount
				edges {
				  node {
					... on Repository {
					  name
					  id
					  url
					  stargazers {
						totalCount
					  }
					  description
					  forkCount
					  primaryLanguage {
						color
						id
						name
					  }
					  deployments(last: 1) {
						nodes {
						  commit {
							message
							messageHeadline
							committedDate
						  }
						}
					  }
					}
				  }
				}
			  }
			}
		  }
		  `
	  });
	  
	const { user } = data;
	const pinnedRepos = user.pinnedItems.edges.map(edge => edge.node);

	return {
		props: {pinnedRepos},
		revalidate: 120,
	};
};

export const Home: React.FC<{ pinnedRepos: PinnedRepo[] }> = ({ pinnedRepos }) => {
    const small = useMediaQuery(640);

    return (
        <div className={styles.page}>
			<title>Ben White</title>
			{/* <Header /> */}
			{
				small ? 
				<div className="flex flex-row items-center !max-w-full w-full overflow-hidden pb-10">
					<PresenceCard profile={true} minimal={small} />
				</div>
				:
				<></>
			}

            <section className={`${styles.primarySection} max-w-3xl mx-auto`} style={{ minHeight: small ? "calc(100vh - 150px);" : "35rem" }}>
                <div className={`flex ${small ? "flex-col-reverse justify-items-start items-start gap-8" : "flex-row items-center"} justify-between opacity-70 gap-1 w-full`}>
					<div className="flex flex-row items-center gap-1">
						<h2 className="text-[1rem] uppercase">Hi there 👋</h2>
						<hr className="h-[1px] w-[30px] bg-[#f4f4f4] border-none m-0" />
                        <h2 className="text-[1rem] uppercase">I{"'"}m Ben White</h2>
					</div>
					
					<div className="flex flex-row items-center !gap-4">
                        <span className="!text-white" onClick={() => {
                            window.location.href = "https://blog.bennjii.dev/"
                        }}>
                            {
                                RiBookFill({ style: {
                                    height: '1.5rem',
                                    width: '1.5rem'
                                } })
                            }
                        </span>

						<span onClick={() => {
							window.location.href = "https://github.com/" + CURRENT_USERNAME
						}}>
						{
							SiGithub({ style: {
								height: '1.5rem',
								width: '1.5rem'
							} })
						}
						</span>
						
						<span onClick={() => {
							window.location.href = "https://www.linkedin.com/in/ben-white-030a1b204/"
						}}>
						{
							SiLinkedin({ style: {
								height: '1.5rem',
								width: '1.5rem'
							} })
						}
						</span>
					</div>
				</div>

				<h1 className={styles.largeScreen}>
					<motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={titleControl} className="text-4xl md:text-[5rem] leading-[5.4rem] font-extrabold mx-0 my-16 mt-8 mb-0 text-slate-100 text-left z-50 flex flex-row flex-wrap gap-4 gap-y-0">
						<motion.div variants={titleVariants}>I{"'"}m a Student,</motion.div>
						<motion.div variants={titleVariants}>Developer & Designer</motion.div>
					</motion.div>
				</h1>

				<h1 className={styles.smallScreen}>
					<motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={titleControl} className="text-7xl md:text-5xl font-extrabold m-0 text-slate-100 text-left z-50 flex flex-row flex-wrap gap-4 gap-y-0">
						<motion.div variants={titleVariants}>I{"'"}m a 🎓,</motion.div>
						<motion.div variants={titleVariants}>🧑‍💻 &</motion.div>
						<motion.div variants={titleVariants}>Designer</motion.div>
					</motion.div>
				</h1>
				
                <p className="mb-12">I am an 18 year old software engineer from New Zealand 🇳🇿</p>

                {
                    small ?
                        <>
                                <div className="min-h-[5rem] "></div>

                                <div className="mb-14"
                                    // className={styles.scrollReminderIfHideHide}
                                    >
                                    <ScrollReminder />
                                </div>
                        </>
                    :
                        <></>
                }
			</section>
			
			<section className="flex flex-col gap-4 w-full flex-wrap justify-center max-w-3xl mx-auto"> {/* className={styles.projectList} */}
				<h2 className="font-bold font-public">What do I do?</h2>
				<p className="text-lg opacity-80">
					I work primarily in web technologies, utilizing the power of Typescript, NextJS and Rust to create <strong className="">powerful web experiences</strong>.
                    <br />  <br />
                    Below is a teaser of my favorite projects at the moment! Take a look, click one and read up about it or try it out for yourself!
				</p>

				<div className={styles.projects}>
					{
						pinnedRepos.map((project: PinnedRepo) => {
							return (
								<ProjectCard key={project.name} project={project} />
							)
						})
					}
				</div>

				<div className={styles.spacer}></div>
			
				<h2 className="font-bold font-public">How do I do it?</h2>
                <p className="text-lg opacity-80">Why, not without these incredible tools of course! Below is a wonderful list of some of my favorite tools I know and use. I{'\''}m proud to say that this list grows all the time, I just can{'\''}t help learning!</p>
				
				<ul className={styles.techGrid}
				>
					<ListItem icon={SiDocker} text="Docker" />
					<ListItem icon={SiPostgresql} text="Postgres" />
					<ListItem icon={SiReact} text="React.js" />
					<ListItem icon={SiNodeDotJs} text="Node.js" />
					<ListItem icon={SiTypescript} text="TypeScript" />
					<ListItem icon={SiGo} text="Golang" />
					<ListItem icon={SiNextDotJs} text="Next.js" />
					<ListItem icon={SiWebpack} text="Webpack" />
					<ListItem icon={SiBabel} text="Babel" />
					<ListItem icon={SiYarn} text="Yarn" />
					<ListItem icon={SiGit} text="Git" />
					<ListItem icon={SiCplusplus} text="C++" />
					<ListItem icon={SiPython} text="Python" />
					<ListItem icon={SiJupyter} text="Jupyter" />
					<ListItem icon={SiRust} text="Rust" />
					<ListItem icon={SiTensorflow} text="TensorFlow" />
					<ListItem icon={SiArduino} text="Arduino" />
					<ListItem icon={SiAdobephotoshop} text="Photoshop" />
					<ListItem icon={SiLinux} text="Linux" />
					<ListItem icon={SiWireguard} text="Wireguard" />
				</ul>

				<div className={styles.spacer}></div>

                <h2 className="font-bold font-public">Want to know more?</h2>
				<p>Why not get in contact with me! I{'\''}m available on discord @unrealg#4406,  <a href="https://twitter.com/UnRealG3">twitter</a>, or you can contact me via <a href="mailto:contact@bennjii.dev">email</a>.</p>
			</section> 

			<div className={styles.spacer}></div>
			
			<Footer />
        </div>
    )
}

export default Home