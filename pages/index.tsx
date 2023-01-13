import Head from 'next/head'
// import Image from 'next/image'
// import { Inter, Nunito, Montserrat } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ContactCard from "../components/ContactCard/ContactCard";


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
            githubUrl={"https://github.com/cameron-mcbroom"}/>
      </main>
    </>
  )
}
