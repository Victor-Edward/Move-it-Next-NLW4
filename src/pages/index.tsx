import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { ChallengeBox } from '../components/challengeBox';
import { CompletedChallenges } from '../components/completedChallenges';
import { Countdown } from '../components/countdown';
import { ExperienceBar } from "../components/experienceBar";
import { Profile } from '../components/perfil';
import { CountdownProvider } from '../context/CountdownContext';

import styles from '../styles/pages/Home.module.css'
import { ChallengeProvider } from '../context/ChallengeContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengeProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengeCompleted={props.challengeCompleted}
    >
      <div className={styles.conteiner}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      
      <ExperienceBar />
      
      <CountdownProvider>
      <section>
        <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
        </div>
        <div>
            <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>
      </div>
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengeCompleted } = ctx.req.cookies

  return{
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengeCompleted: Number(challengeCompleted)
    }
  } 
}