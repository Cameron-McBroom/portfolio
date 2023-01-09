import Head from 'next/head'
// import Image from 'next/image'
// import { Inter, Nunito, Montserrat } from '@next/font/google'
import styles from '../styles/Home.module.css'


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
        <h1 className={'title'}>Cameron McBroom</h1>
          <p>Hello this is a test</p>
      </main>
    </>
  )
}
