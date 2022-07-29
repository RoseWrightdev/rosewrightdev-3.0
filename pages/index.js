import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../conponents/layout'
import Thesis from '../conponents/Thesis/Thesis'
import Body_1 from '../conponents/Body_1/Body_1'
import Body_2 from '../conponents/Body_2/Body_2'
import Body_3 from '../conponents/Body_3/Body_3'
import Conclusion from '../conponents/Conclusion/Conclusion'

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
        <Body_1 />
        <Body_2 />
        <Body_3 />
        <Conclusion />
      </Layout>
    </div>
  )
}
