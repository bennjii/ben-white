import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from 'next';
import Head from 'next/head'
import { skipPartiallyEmittedExpressions } from 'typescript';
import styles from '@styles/Home.module.css'

import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import {
	SiBabel,
	SiCplusplus,
	SiDocker,
	SiGit,
	SiGithub,
	SiGo,
	SiJupyter,
	SiLinkedin,
	SiNextdotjs as SiNextDotJs,
	SiNodedotjs as SiNodeDotJs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiTypescript,
	SiWebpack,
	SiYarn,
} from 'react-icons/si';

// In case I change my username in the future :')
const CURRENT_USERNAME = "UnRealReincarlution";
import "animate.css/animate.min.css";
import Footer from '@components/footer';
import Email from '@components/email';
import { PinnedRepo, } from '@components/github';
import { ProjectCard } from '@components/project_card';
import { ListItem } from '@components/list_item';

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
			user(login: "unrealreincarlution") {
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

    return (
        <div className={styles.page}>
			{/* <Header /> */}

			<section className={styles.primarySection}>
				<div className={styles.h2Roller}>
					<div>
						<h2>Hi there 👋</h2>
						<hr />
						<h2>I{"'"}m Ben White</h2>
					</div>
					
					<div>
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
					I{"'"}m a Student,
					<br />
					Developer & Designer
					{/* <sub>NZ</sub> */}
				</h1>

				<h1 className={styles.smallScreen}>
					I{"'"}m a 🎓,
					<br />
					🧑‍💻 & Designer
				</h1>
				
				<p>I am a 17y/o software engineer from New Zealand</p>

				{/* <div className={styles.scrollReminderIfHideHide}>
					<ScrollReminder />
				</div> */}
			</section>
			
			<section className={styles.projectList}>
				<h2>What do I do?</h2>
				<p style={{ textAlign: 'justify' }}>
					I work primarily in web technologies, utilizing the power of typescript and nextjs to create powerful web apps. Using these to provide tools and services for others is my main goal. Below is a teaser of my favorite projects at the moment! Take a look, click one and read up about it or try it out for yourself!
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
			
				<h2>How do I do it?</h2>
				<p>Why, not without these incredible tools of course! Below is a wonderful list of some of my favorite tools I know and use. I{'\''}m proud to say that this list grows all the time, I just cant help learning!</p>
				
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
				</ul>

				<div className={styles.spacer}></div>

				<h2>Want to know more?</h2>
				<p>Why not get in contact with me! I{'\''}m available on discord @unrealg#4406,  <a href="https://twitter.com/UnRealG3">twitter</a>, or you can contact me via <a href="unrealgdev.buisiness@gmail.com">email</a>.</p>
			</section> 
			
			<Footer />
        </div>
    )
}

export default Home