import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../conponents/layout'
import Thesis from '../conponents/Thesis/Thesis'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RoseWright.dev</title>
        <meta name="description" content="RoseWright.dev" />
        <link rel="icon" href="/rose.ico" />
      </Head>
      <Layout>
        <Thesis />
      </Layout>
    </div>
  )
}
