import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
} from "next";
import Head from "next/head";
import { skipPartiallyEmittedExpressions } from "typescript";
import styles from "@styles/Home.module.css";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import {
  SiAdobephotoshop,
  SiArduino,
  SiBabel,
  SiC,
  SiCplusplus,
  SiDebian,
  SiDocker,
  SiGit,
  SiGithub,
  SiGo,
  SiGooglecloud,
  SiIntellijidea,
  SiJupyter,
  SiLinkedin,
  SiLinux,
  SiMysql,
  SiNextdotjs as SiNextDotJs,
  SiNodedotjs as SiNodeDotJs,
  SiPostgresql,
  SiPulumi,
  SiPython,
  SiReact,
  SiRust,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiWebpack,
  SiWireguard,
  SiYarn,
} from "react-icons/si";

import { RiBookFill } from "react-icons/ri";

import { titleControl, titleVariants } from "@components/framer_constants";

import { motion } from "framer-motion";

// In case I change my username in the future :')
const CURRENT_USERNAME = "bennjii";
import "animate.css/animate.min.css";
import Footer from "@components/footer";
import Email from "@components/email";
import { PinnedRepo } from "@components/github";
import { ProjectCard } from "@components/project_card";
import { ListItem } from "@components/list_item";
import useMediaQuery from "@components/media_query";
import ScrollReminder from "@components/scroll_reminder";
import { PresenceCard } from "@components/presence_card";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

type Props = {
  pinnedRepos: PinnedRepo[];
};

export const getStaticProps: GetStaticProps<Props> = async function () {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
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
    `,
  });

  const { user } = data;
  const pinnedRepos = user.pinnedItems.edges.map((edge) => edge.node);

  return {
    props: { pinnedRepos },
    revalidate: 120,
  };
};

export const Home: React.FC<{ pinnedRepos: PinnedRepo[] }> = ({
  pinnedRepos,
}) => {
  const small = useMediaQuery(640);

  return (
    <div className={styles.page}>
      <title>Ben White</title>
      {/* <Header /> */}
      {small ? (
        <div className="flex w-full !max-w-full flex-row items-center overflow-hidden pb-10">
          <PresenceCard profile={true} minimal={small} />
        </div>
      ) : (
        <></>
      )}

      <section
        className={`${styles.primarySection} mx-auto max-w-3xl`}
        style={{ minHeight: small ? "calc(100vh - 150px);" : "35rem" }}
      >
        <div
          className={`flex ${small ? "flex-col-reverse items-start justify-items-start gap-8" : "flex-row items-center"} w-full justify-between gap-1 opacity-70`}
        >
          <div className="flex flex-row items-center gap-1">
            <h2 className="text-[1rem] uppercase">Hi there 👋</h2>
            <hr className="m-0 h-[1px] w-[30px] border-none bg-[#f4f4f4]" />
            <h2 className="text-[1rem] uppercase">I{"'"}m Ben White</h2>
          </div>

          <div className="flex flex-row items-center !gap-4 hover:cursor-pointer">
            <span
              className="!text-white"
              onClick={() => {
                window.location.href = "https://blog.bennjii.dev/";
              }}
            >
              {RiBookFill({
                style: {
                  height: "1.5rem",
                  width: "1.5rem",
                },
              })}
            </span>

            <span
              onClick={() => {
                window.location.href = "https://github.com/" + CURRENT_USERNAME;
              }}
            >
              {SiGithub({
                style: {
                  height: "1.5rem",
                  width: "1.5rem",
                },
              })}
            </span>

            <span
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/ben-white-030a1b204/";
              }}
            >
              {SiLinkedin({
                style: {
                  height: "1.5rem",
                  width: "1.5rem",
                },
              })}
            </span>
          </div>
        </div>

        <h1 className={styles.largeScreen}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={titleControl}
            className="z-50 mx-0 my-16 mb-0 mt-8 flex flex-row flex-wrap gap-4 gap-y-0 text-left text-4xl font-extrabold leading-[5.4rem] text-slate-100 md:text-[5rem]"
          >
            <motion.div variants={titleVariants}>I{"'"}m a Student,</motion.div>
            <motion.div variants={titleVariants}>
              Developer & Designer
            </motion.div>
          </motion.div>
        </h1>

        <h1 className={styles.smallScreen}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={titleControl}
            className="z-50 m-0 flex flex-row flex-wrap gap-4 gap-y-0 text-left text-7xl font-extrabold text-slate-100 md:text-5xl"
          >
            <motion.div variants={titleVariants}>I{"'"}m a 🎓,</motion.div>
            <motion.div variants={titleVariants}>🧑‍💻 &</motion.div>
            <motion.div variants={titleVariants}>Designer</motion.div>
          </motion.div>
        </h1>

        <p className="mb-12">
          I am a 19 year old software engineer from New Zealand 🇳🇿
        </p>

        {small ? (
          <>
            <div className="min-h-[5rem] "></div>

            <div
              className="mb-14"
              // className={styles.scrollReminderIfHideHide}
            >
              <ScrollReminder />
            </div>
          </>
        ) : (
          <></>
        )}
      </section>

      <section className="mx-auto flex w-full max-w-3xl flex-col flex-wrap justify-center gap-4">
        {" "}
        {/* className={styles.projectList} */}
        <h2 className="font-public font-bold">What do I do?</h2>
        <p className="text-lg opacity-80">
          I work primarily in web technologies, utilizing the power of
          Typescript, NextJS and Rust to create{" "}
          <strong className="">powerful web experiences</strong>.
          <br /> <br />
          Below is a teaser of my favorite projects at the moment! Take a look,
          click one and read up about it or try it out for yourself!
        </p>
        <div className={styles.projects}>
          {pinnedRepos.map((project: PinnedRepo) => {
            return <ProjectCard key={project.name} project={project} />;
          })}
        </div>
        <div className={styles.spacer}></div>
        <h2 className="font-public font-bold">How do I do it?</h2>
        <p className="text-lg opacity-80">
          Why, not without these incredible tools of course! Below is a very
          brief list of some of my favorite tools I know and use. I{"'"}m proud
          to say I have trouble picking favourites as this list grows all the
          time, I just can{"'"}t help learning!
        </p>
        <ul className={styles.techGrid}>
          <ListItem icon={SiRust} text="Rust" />
          <ListItem icon={SiTypescript} text="TypeScript" />
          <ListItem icon={SiPython} text="Python" />
          <ListItem icon={SiGo} text="Go" />
          <ListItem icon={SiC} text="C" />
          <ListItem icon={SiC} text="C" />

          <ListItem icon={SiMysql} text="MySql" />
          <ListItem icon={SiJupyter} text="Jupyter" />
          <ListItem icon={SiReact} text="React" />
          <ListItem icon={SiNextDotJs} text="Next.js" />
          <ListItem icon={SiNodeDotJs} text="Node/Bun" />
          <ListItem icon={SiPulumi} text="Pulumi" />
        </ul>
        <h2 className="font-public font-bold">Want to know more?</h2>
        <p>
          Why not get in contact with me though{" "}
          <a href="mailto:contact@bennjii.dev">contact@bennjii.dev</a>, would
          love to chat.
        </p>
      </section>

      <div className={styles.spacer}></div>

      <Footer />
    </div>
  );
};

export default Home;
