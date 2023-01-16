import Head from 'next/head'
// import Image from 'next/image'
// import { Inter, Nunito, Montserrat } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ContactCard from "../components/ContactCard/ContactCard";
import avatar from '../public/profile.png'
import CareerSummary from "../components/CareerSummary/CareerSummary";
import Section from "../components/Section/Section";
import SkillsHighlight from "../components/SkillsHighlight/SkillsHighlight";
import SkillsChart from "../components/SkillsChart/SkillsChart";


export default function Home() {
  return (
    <>
      <Head>
        <title>Cameron McBroom - Software Developer</title>
        <meta name="description" content="A portfolio and digital resume showcasing the work of Cameron McBroom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <ContactCard
            name="Cameron McBroom"
            greeting={"Hi I am Cameron 👋"}
            phone={"0401 817 894"}
            email={"cam.mcbroom@gmail.com"}
            location={"Emu Plains, NSW"}
            githubUrl={"https://github.com/cameron-mcbroom"}
            avatarUrl={avatar}/>


          <Section>
              <CareerSummary
                  headline="Seeking junior software developer opportunity building web applications"
                  summary="Self-taught software developer having completed 18 months commercial experience at an
              incident management start-up involving extensive use of JavaScript, Swift, Java, Agile methodologies and design patterns.
              Working in diverse roles whilst achieving a Bachelor of Business (Management) has provided exceptional collaboration skills, problem solving, work output and adaptability.
              Recently taking a short break from software development to run my own business, reaffirmed my true passion for software development.
              I am now seeking an opportunity to work with a collaborative team to build high quality, innovative web applications and eventually contribute to leading and developing a great team."/>
          </Section>


          <Section heading="Key Skills">
              <SkillsHighlight skills={[
                  "Creative problem solving",
                  "Teamwork and collaboration",
                  "Ability to write clean, reusable code",
                  "Ability to turn designs into code",
                  "Communication",
                  "Analytical",
                  "Leadership"
              ]}/>
          </Section>

          <Section heading="Technical Skills">
              <SkillsChart skills={[
                  {name: "JavaScript", monthsExperience: 24},
                  {name: "Java", monthsExperience: 12},
              ]}/>
          </Section>


      </main>
    </>
  )
}
