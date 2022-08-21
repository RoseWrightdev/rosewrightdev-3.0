import Head from 'next/head'
import Layout from '../layout/layout'
import Thesis from '../layout/Thesis/Thesis'
import Body_1 from '../layout/Body_1/Body_1'
import Body_2 from '../layout/Body_2/Body_2'
import Body_3 from '../layout/Body_3/Body_3'
import Conclusion from '../layout/Conclusion/Conclusion'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>RoseWright.dev</title>
        <meta name="description" content="RoseWright.dev" />
        <link rel="icon" href="/rose2.ico" />
      </Head>
      <Layout>
        <Thesis />
        <main>
        <Body_1 />
        <Body_2 />
        <Body_3 />
        </main>
        <Conclusion />
      </Layout>
    </div>
  )
}
